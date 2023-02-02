Rails.application.routes.draw do
  root :to => 'directors#index'
  resources :directors #name of the model is the naming convetion for the route
  resources :movies
end
