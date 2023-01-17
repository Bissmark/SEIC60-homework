class CheesesController < ApplicationController
    def index
        @cheeses = Cheese.all
    end

    def show
        @cheese = Cheese.find params[:id]
    end

    def create
        cheese = Cheese.create :name => params[:name], :image => params[:image], :country => params[:country], :family => params[:family], :made => params[:made], :fat => params[:fat], :color => params[:color]
        redirect_to cheese_path(cheese.id)
    end


    def edit
        @cheese = Cheese.find params[:id]
    end

    def update
        cheese = Cheese.find :name => params[:name], :image => params[:image], :country => params[:country], :family => params[:family], :made => params[:made], :fat => params[:fat], :color => params[:color]
        redirect_to cheese_path(cheese.id)
    end

    def destroy
        cheese = Cheese.find params[:id]
        cheese.destroy
        redirect_to cheeses_path
    end
end