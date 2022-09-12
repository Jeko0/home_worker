class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  belongs_to :user
  belongs_to :writers_info

  has_many :comments
end
