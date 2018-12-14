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
end
