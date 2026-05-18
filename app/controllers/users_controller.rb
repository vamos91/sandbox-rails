class UsersController < ApplicationController
  before_action :set_user, only: [ :show, :update, :edit, :destroy ]


  def index
    @users = User.all
  end

  def show
    @posts = @user.posts
  end

  def edit
  end

  def update
  end

  def destroy
    @user.destroy
    redirect_to root_path
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
