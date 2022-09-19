module Api
  module V1
    class ReviewsController < ApplicationController
      include UserAuthentification

      before_action :set_user, only: %i[create update destroy]
      before_action :set_review, only: %i[show update destroy]
      before_action :authenticate_author, only: %i[update destroy]

      def index
        @reviews = Review.all
        render json: @reviews, status: :ok
      end
    
      def show
        render json: @review, status: :ok
      end
    
      def create
        review = Review.new(review_params)
        review.user = @user

        if review.save
          render json: review, status: :created
        else
          render json: review.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @review.update(review_params)
          render json: @review, status: :ok
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @review.destroy
        render json: {message: 'review is destroy'}
      end

      private

        def review_params
          params.require(:review).permit(:writers_info_id, :title, :body)
        end

        def set_review
          @review = Review.find_by(id: params[:id])
        end

        def authenticate_author
          render json: {errors: "you can't make this process" } unless @user == @review.user 
        end
    end    
  end
end 