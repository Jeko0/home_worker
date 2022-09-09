class WritersInfo < ApplicationRecord
  belongs_to :user
  belongs_to :subject
  has_many :reviews, dependent: :destroy
end
