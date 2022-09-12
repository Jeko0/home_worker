module Api
  module V1
    class Users::ProfileController < ApplicationController
      def index
        @users = User.all

        render json: @users, status: 302
      end

      def show
        @user = User.find_by(id: params[:id])
        render json: @user
      end
    end
  end
end