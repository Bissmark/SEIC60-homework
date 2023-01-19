Rails.application.routes.draw do
  root :to => 'authors#index'
  resources :books
  resources :authors
end
