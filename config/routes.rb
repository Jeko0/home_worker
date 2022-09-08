Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }
  namespace :users do
    get '/:id/profile', to: 'profile#show'
    get '/all_user', to: 'profile#index'
    get '/current_user', to: 'profile#my_current_user'
  end
end
