module Api
  module V1
    class Users::RegistrationsController < ApplicationController
      include AccessToken
      before_action :authenticable, only: %i[update]

      def create
        @user = User.new(user_params)

        if @user.save
          respond_with(@user)
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      def update
        if @user.update(update_user_params)
          respond_with(@user)
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      private

        def authenticable
          header = JSON.parse(request.headers['Authorization'])

          return nil if header.nil?

          decoded = AccessToken.decode(header)
          
          @user = User.find_by(id: decoded[:user_id])
        end

        def user_params
          params.require(:user).permit(:username,:email, :password, :password_confirmation)
        end

        def update_user_params
          params.require(:user).permit(:username, :email, :password, :password_confirmation, :current_password)
        end

        def respond_with(resource, _opts = {})
          register_success && return if resource.persisted?

          register_failed
        end

        def register_success
          render json: {
            message: 'Sign up Successfully',
            user: @user,
            access_token: AccessToken.encode(user_id: @user.id)
          }, status: :ok
        end

        def register_failed
          render json: { message: 'Something went wrong'}, status: :unprocessable_entity
        end
    end
  end
end
