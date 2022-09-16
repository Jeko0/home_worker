class AddCategoryIdToWritersInfos < ActiveRecord::Migration[7.0]
  def change
    add_reference :writers_infos, :category, null: false, foreign_key: true
  end
end
