class Api::V1::PagesController < ApplicationController
  def index
    @subjects = Subject.all
    render json: @subjects
  end
end
