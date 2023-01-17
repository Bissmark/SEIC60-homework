Rails.application.routes.draw do
  root :to => 'cheeses#index'
  get '/cheeses' => 'cheeses#index'
  get '/cheeses/new' => 'cheeses#new', :as => 'new_cheese'
  post '/cheeses' => 'cheeses#create'
  get '/cheeses/:id' => 'cheeses#show', :as => 'cheese'
  get '/cheeses/:id/edit' => 'cheeses#edit', :as => 'edit_cheese'
  post '/cheeses/:id' => 'cheeses#update'
  delete '/cheeses/:id' => 'cheeses#destroy'
end
