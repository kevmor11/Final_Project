Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  scope '/api' do
    resources :users, except: [:index] do
      get '/posts', to: 'users#posts'
    end
    resources :rooms, except: [:index] 
    resources :posts, except: [:index]
    resources :sessions, only: [:create, :destroy]
  end
end
