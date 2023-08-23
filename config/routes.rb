Rails.application.routes.draw do
  resources :campaigns
  resources :messages
  resources :characters
  resources :users

  mount ActionCable.server => '/cable'

  get "/users", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/mycharacters", to: "characters#displayUsersCharacters"

  get "/campaigns/:id/messages", to: "campaigns#showMessages"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
