class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable, :confirmable,
          :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many :writers_infos, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :clients_tasks, foreign_key: "client_id", class_name: "Task", dependent: :destroy
  has_many :writers_tasks, foreign_key: "writer_id", class_name: "Task", dependent: :destroy
  validates :username, presence: true

  enum role: %i[guest client writer admin]

  private 

  def set_default_status
    self.status ||= :guest
  end
end
