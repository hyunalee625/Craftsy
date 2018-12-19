export const fetchCartItems = () =>
  $.ajax({
    method: "get",
    url: "api/shopping_cart_items"
  });

export const createCartItem = cartItem =>
  $.ajax({
    method: "post",
    url: "api/shopping_cart_items",
    data: { cartItem }
  });

export const updateCartItem = cartItem =>
  $.ajax({
    method: "patch",
    url: `api/shopping_cart_items/${cartItem.id}`,
    data: { cartItem }
  });

export const deleteCartItem = id =>
  $.ajax({
    method: "delete",
    url: `api/shopping_cart_items/${id}`
  });
