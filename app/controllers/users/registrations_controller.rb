
class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  respond_to :json

  private

    def respond_with(resource, _opts = {})
      register_success && return if resource.persisted?

      register_failed
    end

    def register_success
      render json: {
        message: 'Sign up Successfully',
        user: current_user
      }, status: :ok
    end

    def register_failed
      render json: { message: 'Something went wrong'}, status: :unprocessable_entity
    end

    def configure_sign_up_params
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end

    # If you have extra params to permit, append them to the sanitizer.
    def configure_account_update_params
      devise_parameter_sanitizer.permit(:account_update, keys: [:username])
    end
end
