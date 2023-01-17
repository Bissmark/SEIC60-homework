class OceansController < ApplicationController
    def index
        @oceans = Ocean.all
    end

    def show 
        @ocean = Ocean.find params[:id]
    end

    def new 
    end

    def create
        ocean = Ocean.create :name => params[:name], :maxdepth => params[:maxdepth], :image => params[:image]
        redirect_to ocean_path(ocean.id) # GET to show
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.update :name => params[:name], :maxdepth => params[:maxdepth], :image => params[:image]
        redirect_to ocean_path(ocean.id) # GET to show
    end

    def destroy 
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path # GET to index
    end
end