json.user do
  json.set! user.id do
    json.extract! user, :id, :username, :email
    json.photoUrl url_for(user.photo)
  end
end

json.products do
  user.product_listings.each do |product|
    json.set! product.id do
      json.extract! product, :id, :product_name, :description, :price, :user_id
      json.photoUrl url_for(product.photo)
    end
  end
end