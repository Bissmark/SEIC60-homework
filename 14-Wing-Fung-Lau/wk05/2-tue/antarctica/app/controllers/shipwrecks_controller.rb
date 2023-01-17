class ShipwrecksController < ApplicationController
    def index
        @shipwrecks = Shipwreck.all
    end

    def show
        @shipwreck = Shipwreck.find params[:id]
    end

    def new
    end

    def create
        shipwreck = Shipwreck.create :vessel => params[:vessel], :year => params[:year], :country => params[:country], :image => params[:image]
        redirect_to shipwreck_path(shipwreck.id)
    end

    def edit
        @shipwreck = Shipwreck.find params[:id]
    end
    def update
        shipwreck = Shipwreck.find params[:id]
        shipwreck.update :vessel => params[:vessel], :year => params[:year], :country => params[:country], :image => params[:image]
        redirect_to shipwreck_path(shipwreck.id)
    end

    def destroy
        shipwreck = Shipwreck.find params[:id]
        shipwreck.destroy
        redirect_to shipwrecks_path
    end
end