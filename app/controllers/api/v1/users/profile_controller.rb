module Api
  module V1
    class Users::ProfileController < ApplicationController
      def index
        @users = User.all

        render json: @users, status: :ok
      end

      def show
        @user = User.find_by(id: params[:id])
        
        if @user
          render json: @user, status: :ok
        else
          render json: {errors: 'id not exist'}, status: :unprocessable_entity
        end
      end
    end
  end
end