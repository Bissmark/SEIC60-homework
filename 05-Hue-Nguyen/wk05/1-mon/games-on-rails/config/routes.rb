Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#home'

  get '/magic-eight-ball' => 'ball#ask'

  get '/secret-number' => 'number#guess'

  get '/roshambo' => 'roshambo#play'

end
