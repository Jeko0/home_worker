class Api::V1::SubjectsController < ApplicationController
  def create 
    @subject = Subject.new(subject_params) 

    respond_to do |format|
      if @subject.save
        format.json { render json: @subject , status: :created, location: @subject }
      else
        format.json { render json: @subject.errors, status: :unprocessable_entity }
      end
    end
  end

  private 

    def subject_params
      params.require(:subject).permit(:title)
    end
end
