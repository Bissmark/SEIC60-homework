Rails.application.routes.draw do
  root :to => 'animals#index'
  get '/animals' => 'animals#index'
  get 'animals/add' => 'animals#add', :as => 'add'
  post '/animals' => 'animals#new'
  get '/animals/:id' => 'animals#info', :as => 'animal'
  get '/animals/:id/edit' => 'animals#edit', :as => 'edit'
  post '/animals/:id' => 'animals#update'
  delete 'animals/:id' => 'animals#delete', :as => 'delete'
end
