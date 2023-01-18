Rails.application.routes.draw do
  root :to => 'buildings#index'
  resources :architects
  resources :buildings
end
