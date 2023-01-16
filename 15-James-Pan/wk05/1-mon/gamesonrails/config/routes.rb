Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/games/magic8ball' => 'games#magic8ball'
  get '/games/secretnumber' => 'games#secretnumber'
  get '/games/rockpaperscissors' => 'games#rockpaperscissors'
  post '/games/rockpaperscissors' => 'games#rockpaperscissors'
end
