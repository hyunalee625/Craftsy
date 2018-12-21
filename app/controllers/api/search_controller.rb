class Api::SearchController < ApplicationController
  def search
    search_string = search_params["query_string"].downcase

    @products = Product.all.select do |product|
      name = product.product_name.downcase
      seller = product.seller.username.downcase

      (name.include?(search_string) || seller.include?(search_string))
    end

    render '/api/products/index'
  end

  private

  def search_params
    params.require(:query).permit(:query_string)  
  end

end