Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "rivers#index"

  get '/rivers' => "rivers#index"

  get '/rivers/new' => "rivers#new", :as => 'new_river' # get as new_river_path

  post '/rivers' => "rivers#create"

  get '/rivers/:id' => "rivers#show", :as => 'river' #get as river_path

  get '/rivers/:id/edit' => "rivers#edit", :as => 'edit_river' #get as edit_river_path

  post '/rivers/:id' => "rivers#update" # river_path

  delete '/rivers/:id' => "rivers#destroy"
end
