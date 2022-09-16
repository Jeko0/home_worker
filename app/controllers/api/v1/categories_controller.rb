class Api::V1::CategoriesController < ApplicationController
  def index 
    @categories = Category.all 
    render json: @categories
  end

  def subject_categories
    @subject = Subject.find_by(id: params[:subject_id])
    if @subject
      @categories = @subject.categories
      render json: @categories
    else
      render json: { error: "Subject not found" }
    end
  end
end