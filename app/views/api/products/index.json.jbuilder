@products.each do |product|
  json.product do
    json.set! product.id do
      json.extract! product, :id, :product_name, :description, :price, :user_id
      json.photoUrl url_for(product.photo)
    end
  end
  json.seller do
    json.extract! product.seller, :id, :username, :email_address
  end
end