Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic' => 'magic#welcome'
  get '/magic/game' => 'magic#game'

  get '/number' => 'number#welcome'
  get '/number/game' => 'number#game'

  get '/rps' => 'rps#welcome'
  get '/rps/game' => 'rps#game'
end
