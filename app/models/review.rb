class Review < ApplicationRecord
  belongs_to :user
  belongs_to :writers_info
  
  has_many :comments, dependent: :destroy
  
  validates :title, presence: true, length: { minimum: 5, maximum: 30 }
  validates :body, presence: true, length: {minimum: 5}
end
