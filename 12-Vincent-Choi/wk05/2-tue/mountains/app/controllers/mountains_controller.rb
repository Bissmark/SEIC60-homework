class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new 
    end

    def create
        mountain = Mountain.create :name => params[:name], :age => params[:age], :image => params[:image,], :location => params[:location], :elevation => params[:elevation], :routes => params[:routes]
        redirect_to mountain_path(mountain.id) # GET to show
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.update :name => params[:name], :age => params[:age], :image => params[:image,], :location => params[:location], :elevation => params[:elevation], :routes => params[:routes]
        redirect_to mountain_path(mountain.id) #GET to show
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path # GET to index
    end

end
