class ContactsController < ApplicationController
# See pages controller for  root url

    def index
        @contacts = Contact.all
    end

    def show
        @contact = Contact.find params[:id]
    end

    def new
    end

    def create
        contact = Contact.create :name => params[:name], :image => params[:image], :preferred_name => params[:preferred_name], :company => params[:company], :email => params[:email], :phone => params[:phone]
        redirect_to contact_path(contact.id) # GET to show contact
    end

end

# class PlanetsController < ApplicationController
#     def index
#         @planets = Planet.all
#     end

#     def show
#         @planet = Planet.find params[:id]
#     end

#     def new
#     end

#     def create
#         planet = Planet.create :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :moons => params[:moons]
#         redirect_to planet_path(planet.id) # GET to show
#     end

#     def edit
#         @planet = Planet.find params[:id]
#     end

#     def update
#         planet = Planet.find params[:id]
#         planet.update :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :moons => params[:moons]
#         redirect_to planet_path(planet.id) # GET to show
#     end

#     def destroy
#         planet = Planet.find params[:id]
#         planet.destroy
#         redirect_to planets_path # GET to index
#     end
# end
