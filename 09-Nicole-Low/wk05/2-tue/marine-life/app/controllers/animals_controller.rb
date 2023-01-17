class AnimalsController < ApplicationController
    def index
        @animals = Animal.all
    end

    def info
        @animal = Animal.find params[:id]
    end

    def edit
        @animal = Animal.find params[:id]
    end

    def update
        animal = Animal.find params[:id]
        animal.update :name => params[:name], :scientific_name => params[:scientific_name], 
        :life_span => params[:life_span], :location => params[:location], :image => params[:image]
        redirect_to animal_path(animal.id)
    end

    def add
    end

    def new
        animal = Animal.create :name => params[:name], :scientific_name => params[:scientific_name], 
        :life_span => params[:life_span], :location => params[:location], :image => params[:image]
        redirect_to animals_path
    end

    def delete
        animal = Animal.find params[:id]
        animal.destroy
        redirect_to animals_path
    end
end