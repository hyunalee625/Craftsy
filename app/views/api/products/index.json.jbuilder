@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :description, :price, :user_id
    # json.photoUrl url_for(product.photo)
  end

  
end