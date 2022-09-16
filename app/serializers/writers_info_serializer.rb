class WritersInfoSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :subject_id

  belongs_to :user
  belongs_to :subject
  has_many :reviews
  belongs_to :category
end
