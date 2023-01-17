Rails.application.routes.draw do

  root :to => 'players#index'
  
  # INDEX 
  get '/players' => 'players#index'

   # NEW: it has to be before SHOW
   get '/players/new' => 'players#new', :as=> "new_player"


  # SHOW 
  get '/players/:id' => 'players#show', :as => 'player'

  # CREATE: post request after the creation of a new player 
  post '/players' => 'players#create'

  # EDIT
  get '/players/:id/edit' => 'players#edit', :as => 'edit_player'

  # UPDATE
  post '/players/:id' => 'players#update'

  # DELETE
  delete '/players/:id' => 'players#destroy'

end
