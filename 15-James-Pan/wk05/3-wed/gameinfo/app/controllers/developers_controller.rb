class DevelopersController < ApplicationController
  def index
    @developers = Developer.all
  end

  def new
    @developer = Developer.new
  end

  def create
    developer = Developer.create devloper_params
    redirect_to developer
  end

  def edit
    @developer = Developer.find params[:id]
  end

  def update
    developer = Developer.find params[:id]
    developer.update developer_params
    redirect_to developer

  def show
    @developer = Developer.find params[:id]
  end

  def destroy_all
    developer = Developer.find params[:id]
    developer.destroy_all
    redirect_to developers_path

  private
  def developer_params
    params.requite(:developer).permit(:name, :headquarters, :founded_in, :image)
  end
end
