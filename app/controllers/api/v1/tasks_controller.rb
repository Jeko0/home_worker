module Api 
  module V1    
    class TasksController < ApplicationController
      include AccessToken

      before_action :set_task, only: %i[show update destroy]
      before_action :set_user, only: %i[create destroy update]

      def index
        @tasks = Task.all
        render json: @tasks, status: :ok
      end

      def show
        render json: @task, status: :ok 
      end

      def create
        task = Task.new(task_params)
        task.client = @user

        if task.save
          render json: task, status: :created
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      def update
        if @task.client == @user 
          @task.update(task_params)
          render json: @task, status: :ok
        else
          render json: @task.errors, status: :unprocessable_entity
        end
      end

      def destroy
        if @task.client == @user 
          @task.destroy
          render json: {message: "task is destroy"}, status: :ok
        else
          render json: {message: "you can't access to destroy this task"}, status: :unauthorized
        end 
      end

      private

        def task_params
          params.require(:task).permit(:writer_id, :title,:description, :salary, :category_id)
        end

        def set_task
          @task = Task.find_by(id: params[:id])
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