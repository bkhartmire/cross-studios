Rails.application.routes.draw do
  scope '/api' do
    resources :dance_classes, only: [:index]
    resources :instructors do
      resources :reviews
    end
    resources :studios, only: [:index]
    resources :users
    resources :user_dance_classes, only: [:index, :create, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
    post '/login' => "sessions#create"
    delete '/logout' => "sessions#destroy"
    get '/profile' => "users#profile"
  end
end
