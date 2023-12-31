class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
  

    
    def show
        user = @current_user
        render json: user
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private
  
    def find_user
        User.find_by(id: params[:id])
    end

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

  end
  