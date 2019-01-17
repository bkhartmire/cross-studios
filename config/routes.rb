Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #just playing with this so that I can see Nokogiri results
  namespace :api do
    resources :dance_classes
  end
end
