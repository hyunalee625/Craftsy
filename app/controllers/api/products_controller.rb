class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render "api/products/index"
  end

  def show
    @product = Product.find(params[:id])
    if @product
      render "api/products/show"
    else
      render json: ["Product does not exist"], status: 404
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.destroy
      render "api/products/show"
    else
      render json: ["Oops... something went wrong. Try again."], status: 422
    end
  end

  private
  def product_params
    params.require(:product).permit(:product_name, :description, :price, :user_id)
  end
end
