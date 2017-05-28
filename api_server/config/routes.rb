Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users/me', to: 'users#me'

  mount ActionCable.server => '/cable'

  scope '/api' do

    resources :users
    resources :rooms, except: [:index] do
      resources :posts, except: [:index]
    end
    resources :sessions, only: [:create, :destroy]
    resources :userrooms, only: [:create, :show, :destroy, :index]
  end
  resources :users, only: [:new, :create, :show]
  resources :rooms, only: [:new, :create, :show]
  root to: 'sessions#new'

end
