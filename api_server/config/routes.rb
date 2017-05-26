Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :users, except: [:index]
    resources :rooms, except: [:index] 
    resources :posts, except: [:index]
    resources :sessions, only: [:create, :destroy]
  end
  resources :users, only: [:new, :create, :show]
  resources :rooms, only: [:new, :create, :show]
  root to: 'sessions#new'
  

end
