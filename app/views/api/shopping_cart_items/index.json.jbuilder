json.cartItems do
  @shopping_cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.extract! cart_item, :id, :user_id, :product_id, :quantity
    end
  end
end

json.products do
  @shopping_cart_items.each do |cart_item|
    json.set! cart_item.product_id do
      json.extract! cart_item.product, :id, :product_name, :description, :price, :user_id
      json.photoUrl url_for(cart_item.product.photo)
    end
  end
end

json.sellers do
  @shopping_cart_items.each do |cart_item|
    json.set! cart_item.product.seller.id do
      json.extract! cart_item.product.seller, :id, :username, :email
      json.photoUrl url_for(cart_item.product.seller.photo)
    end
  end
end