class PoemsController < ApplicationController
  def index
    @poems = Poem.all
    @poet
  end

  def new
    @poem = Poem.new
  end

  def create
    @poem = Poem.create poem_params
    redirect_to poems_path
  end

  def edit
    @poem = Poem.find(params[:id])
  end

  def update
    poem = Poem.find(params[:id])
    poem.update poem_params
    redirect_to poem_path
  end

  def show
    @poem = Poem.find(params[:id])
  end

  def destroy
    @poem = Poem.find(params[:id])
    @poem.destroy
    redirect_to poems_path
  end

  def poem_params
    params.require(:poem).permit(:name, :genre, :original, :translation, :poet_id)
  end
end
