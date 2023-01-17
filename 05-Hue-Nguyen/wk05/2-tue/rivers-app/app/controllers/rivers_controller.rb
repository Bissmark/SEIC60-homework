class RiversController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @rivers = River.all
    p @rivers
  end

  def new
  end

  def create
    river = River.create :name => params[:name], :countries => params[:countries], :sources => params[:sources], :mouth => params[:mouth], :basin_size => params[:basin_size], :length => params[:length], :image => params[:image], :continent => params[:continent]

    redirect_to river_path(river.id)
  end

  def show
    @river = River.find params[:id]
  end

  def edit
    @river = River.find params[:id]
  end

  def update
    river = River.find params[:id]
    river.update :name => params[:name], :countries => params[:countries], :sources => params[:sources], :mouth => params[:mouth], :basin_size => params[:basin_size], :length => params[:length], :image => params[:image], :continent => params[:continent]
    redirect_to river_path(river.id)
  end

  def destroy
    river = River.find params[:id]
    river.destroy
    redirect_to rivers_path
  end
end
