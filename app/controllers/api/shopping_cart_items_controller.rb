class Api::ShoppingCartItemsController < ApplicationController
  def index
    @current_user = current_user
    @shopping_cart_items = ShoppingCartItem.where(user_id: @current_user.id)
    render "api/shopping_cart_items/index"
  end

  def create
    @shopping_cart_item = ShoppingCartItem.find_by(user_id: params[:cartItem][:user_id], product_id: params[:cartItem][:product_id])

    if @shopping_cart_item
      @shopping_cart_item.quantity = @shopping_cart_item.quantity.to_i + params[:cartItem][:quantity].to_i
      @quantity_too_high= false
      if @shopping_cart_item.quantity > 10
        @quantity_too_high = true
        @shopping_cart_item.quantity = 10
      end
    else
      @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
    end
  
    if @shopping_cart_item.save
      render "api/shopping_cart_items/show"
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    if @shopping_cart_item.destroy
      render "api/shopping_cart_items/show"
    else
      render json: @shopping_cart_items.errors.full_messages, status: 422
    end
  end

  def update
    @shopping_cart_item = ShoppingCartItem.find(params[:id])

    if @shopping_cart_item.update(shopping_cart_item_params)
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  private
  
  def shopping_cart_item_params
    params.require(:cartItem).permit(:user_id, :product_id, :quantity, :id)
  end
end