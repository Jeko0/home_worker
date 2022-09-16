class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :role

  has_many :writers_infos
  has_many :reviews
  has_many :comments
  has_many :clients_tasks
  has_many :writers_tasks
  
end
