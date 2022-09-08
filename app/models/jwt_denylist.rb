class JwtDenylist < ApplicationRecord\
  include Devise::JWT::RevocationsStrategies::Denylist

  self.table_name = 'jwt_denylist'
end
