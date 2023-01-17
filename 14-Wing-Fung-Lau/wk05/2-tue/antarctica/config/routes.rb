Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'shipwrecks#index'

  get 'shipwrecks' => 'shipwrecks#index'
  get 'shipwrecks/new' => 'shipwrecks#new', :as => 'new_shipwreck'
  post 'shipwrecks' => 'shipwrecks#create'
  get 'shipwrecks/:id' => 'shipwrecks#show', :as => 'shipwreck'
  get 'shipwrecks/:id/edit' => 'shipwrecks#edit', :as => 'edit_shipwreck'
  post 'shipwrecks/:id' => 'shipwrecks#update'
  delete 'shipwrecks/:id' => 'shipwrecks#destroy'
end
