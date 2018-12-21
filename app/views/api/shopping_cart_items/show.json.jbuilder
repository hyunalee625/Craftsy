json.cartItem do
  json.set!  @shopping_cart_item.id do
    json.extract! @shopping_cart_item, :id, :user_id, :product_id, :quantity
  end
end

json.product do
  json.set! @shopping_cart_item.product_id do
    json.extract! @shopping_cart_item.product, :id, :product_name, :description, :price, :user_id
    json.photoUrl url_for(@shopping_cart_item.product.photo)
  end
end

json.seller do
  json.set! @shopping_cart_item.product.seller.id do
    json.extract! @shopping_cart_item.product.seller, :id, :username, :email
    json.photoUrl url_for(@shopping_cart_item.product.seller.photo)
  end
end

json.quantity @quantity_too_high