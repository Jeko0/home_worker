class Subject < ApplicationRecord
  has_many :categories, dependent: :destroy
  has_many :writers_infos, dependent: destroy
  validates :title, presence: true, uniqueness: true
end
