Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root :to => 'pages#home' # 'controller#action'
    get '/answers' => 'answers#form' # 'controller#action'
    get '/answers/info' => 'answers#info'
  end
  
