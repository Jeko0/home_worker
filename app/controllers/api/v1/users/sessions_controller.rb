module Api
  module V1
    class Users::SessionsController < ApplicationController
      include AccessToken

      def create
        @user = User.find_by(email: user_params[:email])

        if @user&.valid_password?(user_params[:password])
          respond_with(@user)
        else
          render json: {error: "incorrect email or password" }, status: :unauthorized
        end
      end

      private

        def user_params
          params.require(:user).permit(:email, :password)
        end

        def respond_with(resource, _opts = {})
          render json: {
            message: 'login in Successfully',
            user: @user,
            access_token: AccessToken.encode(user_id: @user.id)
          }, status: :ok
        end
    end
  end
end
