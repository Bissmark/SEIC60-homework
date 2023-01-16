Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic' => 'magic#form'
  get '/magic/answer' => 'magic#answer'

  get '/secret' => 'secret#form'
  get '/secret/answer' => 'secret#answer'
  get '/secret/wrong' => 'secret#wrong'

  get '/rockpaperscissor' => 'rockpaperscissor#form'
  get '/rockpaperscissor/answer' => 'rockpaperscissor#answer'


end
