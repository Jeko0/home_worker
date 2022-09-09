Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      get "/", to: "pages#index"
      get "/categories", to: "categories#index"
    end
  end
end
