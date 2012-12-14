RailsTouch::Application.routes.draw do
  
  resources :home
  resources :users

  get '/' => 'home#index'

end
