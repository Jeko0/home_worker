module Api
  module V1 
    class CommentsController < ApplicationController
      include UserAuthentification

      before_action :set_user, only: %i[create update destroy]
      before_action :set_review
      before_action :set_comment, only: %i[update destroy]
      before_action :authenticate_author, only: %i[update destroy]
    
      def create
        comment = Comment.new(comment_params)
        comment.user = @user 
        comment.review = @review
    
        if comment.save
          render json: comment, status: :created
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @comment.update(comment_params)
          render json: @comment, status: :ok
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @comment.destroy
        render json: {message: "comment is destroy"}
      end
    
      private  
    
      def authenticate_author
        render json: {message: "you can't make this process" } unless @user == @comment.user 
      end

      def set_review
        @review = Review.find_by(id: params[:review_id])
      end
    
      def comment_params
        params.require(:comment).permit(:body)
      end

      def set_comment
        @comment = Comment.find_by(id: params[:id])
      end

    end    
  end
end