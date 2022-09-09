class Subject < ApplicationRecord
  has_many :categories, dependent: :destroy
  validates :title, presence: true, uniqueness: true
end
