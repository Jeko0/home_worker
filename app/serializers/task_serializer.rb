class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :salary, :finished, :client_id, :writer_id, :category_id

  belongs_to :client
  belongs_to :writer
  belongs_to :category
end
