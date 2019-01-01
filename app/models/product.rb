
# == Schema Information
#
# Table name: products
#
#  id           :bigint(8)        not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  price        :float            not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Product < ApplicationRecord
  validates :product_name, :description, :price, :user_id, presence: true
  validates :product_name, uniqueness: { scope: :user_id }
  validate :ensure_photo_attached

  belongs_to :seller,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :shopping_cart_items, dependent: :destroy
  has_many :reviews, dependent: :destroy

  has_one_attached :photo

  def ensure_photo_attached
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
