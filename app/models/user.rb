class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many :writers_infos, dependent: :destroy

  validates :username, presence: true

  enum role: %i[guest client writer admin]


  class << self
    def sign_up(user_params)
      pepper = nil
      cost = 10
      encrypted_password = ::BCrypt::Password.create("#{user_params[:password]}#{pepper}", :cost => cost).to_s
      email = user_params[:email]
      username = user_params[:username]
      User.new(username: username, email: email, encrypted_password: encrypted_password)
    end
  end

  def api_update(user_params)
    pepper = nil
    cost = 10
    encrypted_password = ::BCrypt::Password.create("#{user_params[:password]}#{pepper}", :cost => cost).to_s
    email = (user_params[:email] == '' || user_params[:email] == nil) ? self.email : user_params[:email]
    username = (user_params[:username] == '' || user_params[:username] == nil) ? self.username : user_params[:username]
    self.update(username: username, email: email, encrypted_password: encrypted_password)
  end

  private 

  def set_default_status
    self.status ||= :guest
  end
end
