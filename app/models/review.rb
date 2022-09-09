class Review < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { minimum: 5, maximum: 30 }
  validates :body, presence: true, length: {minimum: 5}
end
