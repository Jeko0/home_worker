class AddReferencesToReviews < ActiveRecord::Migration[7.0]
  def change
    add_reference :reviews, :writers_info, null: false, foreign_key: true
  end
end
