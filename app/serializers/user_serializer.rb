class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username

  has_many :writers_infos
  has_many :reviews
  has_many :comments
end
