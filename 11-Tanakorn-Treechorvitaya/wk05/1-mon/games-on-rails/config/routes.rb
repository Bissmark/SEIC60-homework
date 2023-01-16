Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'games#home'

  get '/magic8ball' => 'games#magic'
  get '/magic8ball/result' => 'games#message'


  get '/secretnumber' => 'games#guess'
  get '/secretnumber/result' => 'games#number'


  get '/rockpaperscissors' => 'games#choose'
  get '/rockpaperscissors/result' => 'games#win'

end
