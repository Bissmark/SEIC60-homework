Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/eightball' => 'eightballs#input'
  get '/answer' => 'eightballs#answer'

  get '/secretnumber' => 'secretnumbers#input'
  get '/secretanswer' => 'secretnumbers#secretanswer'
end
