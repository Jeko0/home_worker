Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :users do
        resources :sessions, only: %i[create]
        resources :registrations, only: %i[create update]
        get '/:id/profile', to: 'profile#show'
        get '/all_user', to: 'profile#index'
      end
      
      resources :writers_info, only: %i[index show create]
      resources :tasks, only: %i[index show create update destroy]
      resources :reviews do
        resources :comments, only: %i[create update destroy]
      end

      get "/", to: "pages#index"
      get "/categories", to: "categories#index"
      get "/subject_categories", to: "categories#subject_categories"
    end
  end
end
