Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/future' => 'future#answer'
  get '/fortune' => 'future#answer'

end