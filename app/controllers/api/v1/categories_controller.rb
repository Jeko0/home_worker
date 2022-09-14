class Api::V1::CategoriesController < ApplicationController
  def index 
    @categories = Category.all 
    render json: @categories
  end

  def subject_categories
    @subject = Subject.find_by(id: params[:subject_id])
    if @subject
      @subject_category = @subject.categories
      render json: @subject_category
    else
      render json: { error: "Subject not found" }
    end
  end
end