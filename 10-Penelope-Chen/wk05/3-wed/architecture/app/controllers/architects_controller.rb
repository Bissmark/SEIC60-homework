class ArchitectsController < ApplicationController
  def index
    @architects = Architect.all
  end

  def new
    @architect = Architect.new 
  end

  def create 
    architect = Architect.create architect_params
    redirect_to architect
  end

  def edit
    @architect = Architect.find params[:id]
  end

  def update
    architect = Architect.find params[:id]
    architect.update architect_params
    redirect_to architect
  end

  def show
    @architect = Architect.find params[:id]
  end

  def destroy 
    architect = Architect.find params[:id]
    architect.destroy
    redirect_to architects_path
  end

  private
  def architect_params
    params.require(:architect).permit(:name, :nationality, :dob, :image)
  end
end
