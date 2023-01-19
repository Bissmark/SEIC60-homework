Rails.application.routes.draw do
  root :to => 'poets#index'
  resources :poets, :poems
end
