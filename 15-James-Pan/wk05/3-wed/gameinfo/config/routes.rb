Rails.application.routes.draw do
  get 'games/index'
  get 'games/new'
  get 'games/edit'
  get 'games/show'
  get 'developers/index'
  get 'developers/new'
  get 'developers/edit'
  get 'developers/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
