Rails.application.routes.draw do
  root :to => 'games#home'

  #-------------------------------------
  # MAGIC 8 BALL
  get '/magic_eight_ball' => 'magic_eight_ball#play'
  get '/magic_eight_ball/result' => 'magic_eight_ball#result'

  #-------------------------------------
  # SECRET NUMBER
  get '/secret_number' => 'secret_number#play'
  get '/secret_number/result' => 'secret_number#result'

  #-------------------------------------
  # SECRET NUMBER
  get '/rock_paper_scissors' => 'rock_paper_scissors#play'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#result'

end
