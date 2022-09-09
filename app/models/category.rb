class Category < ApplicationRecord
  belongs_to :subject
  validates :name, presence: true, length: {maximum: 20}
end
