class Task < ApplicationRecord
  belongs_to :client, class_name: "User"
  belongs_to :writer, class_name: "User"
  belongs_to :category
end
