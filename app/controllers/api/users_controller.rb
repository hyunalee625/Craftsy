require 'open-uri'

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545333145/Profile-Pics/smart.png"), filename: "smart-emoji.png")
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :photo)
  end
end
