class WhalesController < ApplicationController
    
    def index
        @whales = Whale.all
    end

    def show
        @whale = Whale.find params[:id]
    end

    def new
    end

    def create
        whale = Whale.create :com_name => params[:com_name], :sci_name => params[:sci_name], :size => params[:size], :weight => params[:weight], :image => params[:image], :endangered => params[:endangered], :special_info => params[:special_info]
        redirect_to whale_path(whale.id)
    end

    def edit
        @whale = Whale.find params[:id]
    end

    def update
        whale = Whale.find params[:id]
        whale.update :com_name => params[:com_name], :sci_name => params[:sci_name], :size => params[:size], :weight => params[:weight], :image => params[:image], :endangered => params[:endangered], :special_info => params[:special_info]
        redirect_to whale_path(whale.id)
    end

    def destroy
        whale = Whale.find params[:id]
        whale.destroy
        redirect_to whales_path
    end

    def video
    end

    def calm
    end
end