class AddIndexToWritersInfos < ActiveRecord::Migration[7.0]
  def change
    add_index :writers_infos, [:user_id, :subject_id], unique: true
  end
end
