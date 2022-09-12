class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :categories
  has_many :writers_infos
end
