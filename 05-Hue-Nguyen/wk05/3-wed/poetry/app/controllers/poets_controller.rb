class PoetsController < ApplicationController
  
  def index
    @poets = Poet.all
  end

  def new
    @poet = Poet.new
  end

  def create
    @poet = Poet.create poet_params
    redirect_to poets_path
  end

  def edit
    @poet = Poet.find(params[:id])
  end

  def update
    poet = Poet.find(params[:id])
    poet.update poet_params
    redirect_to poet_path
  end

  def show
    @poet = Poet.find(params[:id])
  end

  def destroy
    @poet = Poet.find(params[:id])
    @poet.destroy
    redirect_to poets_path
  end

  def poet_params
    params.require(:poet).permit(:name, :dob, :nationality, :image)
  end
end
