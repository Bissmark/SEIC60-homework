Rails.application.routes.draw do
  root :to => 'books#index'
  resources :authors # this will auto build the routes you need for CRUD
  resources :books
end
