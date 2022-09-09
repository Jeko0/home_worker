class Category < ApplicationRecord
  belongs_to :subject
  has_many :tasks, dependent: :destroy
  validates :name, presence: true, length: {maximum: 20}
end
