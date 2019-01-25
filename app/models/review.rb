# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, :user_id, :product_id, presence: true
  validates :body, length: {maximum: 300}
  validates :rating, inclusion: {in: (1..5), :message => "must be between 1 and 5"}
  validates :product_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :product
end