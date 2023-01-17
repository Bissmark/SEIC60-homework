Rails.application.routes.draw do

  root :to => 'pages#home'
  get '/whales' => 'whales#index'
  get '/whales/video' => 'whales#video', :as => 'video'
  get '/whales/calm' => 'whales#calm'
  get '/whales/new' => 'whales#new', :as => 'new_whale' 
  post '/whales' => 'whales#create'
  get '/whales/:id' => 'whales#show', :as => 'whale'
  get '/whales/:id/edit' => 'whales#edit', :as => 'edit_whale'
  post '/whales/:id' => 'whales#update'
  delete '/whales/:id' => 'whales#destroy'

end
