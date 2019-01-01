Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show, :create, :update, :destroy] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    resources :shopping_cart_items, only: [:index, :create, :destroy, :update]
    get '/search', to: 'search#search'
  end
end
