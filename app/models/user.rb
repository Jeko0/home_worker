class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many :writers_infos

  validates :username, presence: true

  enum role: %i[guest client writer admin]


  private 

  def set_default_status
    self.status ||= :guest
  end
end
