Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'games#index'
  get '/games' => 'games#index'
  get '/games/new' => 'games#new', :as => 'new_game'
  post '/games' => 'games#create'
  get '/games/:id' => 'games#show', :as => 'game'
  get '/games/:id/edit' => 'games#edit', :as => 'edit_game'
  post '/games/:id/' => 'games#update'
  delete '/games/:id' => 'games#destroy'
end
