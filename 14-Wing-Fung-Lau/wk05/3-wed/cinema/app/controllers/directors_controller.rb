class DirectorsController < ApplicationController
  def index
    @directors = Director.all
  end

  def new
    @director = Director.new # an example of an director for the form_helper to look at
  end

  def create
    director = Director.create director_params
    redirect_to director # GET to show
  end

  def edit
    @director = Director.find params[:id]
  end

  def update
    director = Director.find params[:id]
    director.update director_params
    redirect_to director # GET to show
  end

  def show
    @director = Director.find params[:id]
  end

  def destroy
    @director = Director.find params[:id]
    @director.destroy
    redirect_to '/directors'
  end

  private
  def director_params # strong_params
    params.require(:director).permit(:name, :nationality, :dob, :period, :image)
  end
end
