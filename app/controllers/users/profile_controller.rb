class Users::ProfileController < ApplicationController
  def index
    @users = User.all

    render json: @users.map { |user| user.username }, status: 302
  end

  def show
    @user = User.find_by(id: params[:id])

    render json: @user.username
  end
end