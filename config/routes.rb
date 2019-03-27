Rails.application.routes.draw do
  scope '/api' do
    resources :dance_classes, only: [:index]
    resources :instructors do
      resources :reviews
    end
    resources :studios, only: [:index]
    resources :users
    resources :user_dance_classes, only: [:create, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
    get '/calendar' => "dance_classes#calendar_index"
    post '/login' => "sessions#create"
    delete '/logout' => "sessions#destroy"
    get '/profile' => "users#profile"
    #is this route correct??
    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    post 'auth/google_user', to: 'sessions#google_auth'
  end
end
