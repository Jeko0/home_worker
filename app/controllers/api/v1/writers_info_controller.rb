module Api
  module V1
    class WritersInfoController < ApplicationController

      before_action :set_user
      before_action :require_current_user_is_writer!, only: %i[create]

      def index
        @writers_infos = WritersInfo.all
        render json: @writers_infos
      end

      def show
        @writers_info = WritersInfo.find_by(id: params[:id])
        render json: @writers_info
      end

      def create
        writers_info = WritersInfo.new(writers_info_params)
        if writers_info.save
          render json: writers_info, status: :created
        else
          render json: writers_info.errors, status: :unprocessable_entity
        end
      end

      private

        def writers_info_params
          params.require(:writers_info).permit(:subject)
          subject_id = Subject.find_by(title: params[:writers_info][:subject]).id
          writers_info = { subject_id: subject_id, rating: 0, user_id: @user.id }
        end

        def require_current_user_is_writer!
          render json: { messages: 'you have to be writer or admin'}, status: :unauthorized unless (current_user&.writer? || current_user&.admin?)
        end

        def set_user
          header = JSON.parse(request.headers['Authorization'])
      
          return nil if header.nil?
      
          decoded = AccessToken.decode(header)
          
          @user = User.find_by(id: decoded[:user_id])
        end
    end
  end
end