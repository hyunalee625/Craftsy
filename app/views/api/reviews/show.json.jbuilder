json.set! @review.id do
  json.extract! @review, :id, :body, :rating, :user_id, :product_id, :updated_at
  json.extract! @review.user, :username, :photo
end
