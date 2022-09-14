class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :subject_id

  belongs_to :subject
  has_many :tasks
end
