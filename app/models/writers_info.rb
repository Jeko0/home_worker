class WritersInfo < ApplicationRecord
  belongs_to :user
  belongs_to :subject
  belongs_to :category
  has_many :reviews, dependent: :destroy
end
