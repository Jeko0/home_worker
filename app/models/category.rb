class Category < ApplicationRecord
  belongs_to :subject
  has_many :tasks, dependent: :destroy
  has_many :writers_infos
  validates :name, presence: true, length: {maximum: 20}
end
