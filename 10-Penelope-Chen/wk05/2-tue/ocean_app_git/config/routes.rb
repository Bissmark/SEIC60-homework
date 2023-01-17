Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # This file will cause the most suffering today. 
  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new', :as => 'new_ocean'
  post '/oceans' => 'oceans#create'

  get '/oceans/:id' => 'oceans#show', :as => 'ocean'
  get '/oceans/:id/edit' => 'oceans#edit', :as => 'edit_ocean'
  post '/oceans/:id' => 'oceans#update'

  delete '/oceans/:id' => 'oceans#destroy'
end
