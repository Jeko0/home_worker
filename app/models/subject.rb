class Subject < ApplicationRecord
  has_many :writers_infos
  validates :title, presence: true, uniqueness: true
end
