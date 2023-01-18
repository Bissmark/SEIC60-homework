Rails.application.routes.draw do
    root :to => 'actors#index'
    resources :actors
    resources :movies
end
