Rails.application.routes.draw do
  # create a homepage 
  root :to => "pages#home"

  get '/magicballs' => 'magicballs#form'
  get '/magicballs/info' => 'magicballs#info'

  get '/selectnumbers' => 'select_numbers#form'
  get '/selectnumbers/info' =>'select_numbers#info'

  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'
end
