# frozen_string_literal: true

module UserAuthentification
  def set_user
    header = JSON.parse(request.headers['Authorization'].to_json)

    return nil if header.nil?

    decoded = AccessToken.decode(header)

    @user = User.find_by(id: decoded[:user_id])
  end
end
