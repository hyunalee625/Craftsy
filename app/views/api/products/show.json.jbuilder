json.product do
  json.set! @product.id do
    json.extract! @product, :id, :product_name, :description, :price, :user_id
    json.photoUrl url_for(@product.photo)
  end
end

json.seller do
  json.set! @product.seller.id do
    json.extract! @product.seller, :id, :username
  end
end