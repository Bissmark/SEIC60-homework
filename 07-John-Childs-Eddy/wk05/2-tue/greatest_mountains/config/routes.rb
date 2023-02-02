Rails.application.routes.draw do
  root :to => 'mountains#index'

  get 'mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new', :as => 'new_mountain'
  get '/mountains/:id' => 'mountains#show'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  get '/mountain/:id/edit' => 'mountains#edit', :as => 'edit_mountain'
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'
end