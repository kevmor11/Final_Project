Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users/me', to: 'users#me'
  scope '/api' do

    resources :users, except: [:index]
    resources :rooms, except: [:index] do
      resources :posts, except: [:index]
    end
    resources :sessions, only: [:create, :destroy]
  end
  resources :users, only: [:new, :create, :show]
  resources :rooms, only: [:new, :create, :show]
  root to: 'sessions#new'

end
