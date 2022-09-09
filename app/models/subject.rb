class Subject < ApplicationRecord
  has_many :categories
  validates :title, presence: true, uniqueness: true
end
