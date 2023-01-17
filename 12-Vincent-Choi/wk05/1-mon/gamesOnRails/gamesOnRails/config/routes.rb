Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#welcome' # 'controller#action'

  get '/magicballs' => 'magicballs#question'
  get '/magicballs/answer' => "magicballs#answer"

  get '/rocks' => 'rocks#guess'
  get '/rocks/answer' => "rocks#answer"

  get '/secret' => 'secret#guess'
  get '/secret/answer' => "secret#answer"
end
