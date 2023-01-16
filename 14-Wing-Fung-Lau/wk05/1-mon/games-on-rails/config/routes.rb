Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'games#home'

  get '/magic8ball' => 'games#magic_8_ball' # 'controller#action'
  get '/magic8ball/:question' => 'games#magic_answer'

  get '/secretnumber' => 'games#secret_number'

  get '/rockpaperscissors' => 'games#rock_paper_scissor'

end
