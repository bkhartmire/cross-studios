Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #just playing with this so that I can see Nokogiri results
  scope '/api' do
    resources :dance_classes
    resources :instructors
    resources :studios
    resources :users
    resources :user_dance_classes
    post '/login' => "sessions#create"
    delete '/logout' => "sessions#destroy"
    get '/profile' => "users#profile"
    #resources :tokens, only: [:create]
    # get 'user', to: 'users#show', as: 'show'
    # post 'signup', to: 'users#create', as: 'user_signup'
    # post 'login', to: 'users#login', as: 'user_login'
  end
end
