class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user, only: [:destroy]
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    respond_with resource
  end

  private

    def respond_with(resource, _opts = {})
      render json: {
        message: 'login in Successfully',
        user: current_user
      }, status: :ok
    end

    def respond_to_on_destroy
      log_out_success && return unless current_user

      log_out_failure
    end

    def log_out_success
      render json: { message: 'You are log out'}
    end

    def log_out_failure
      render json: { message: 'Hmm Something wrong'}, status: :unauthorized
    end
end
