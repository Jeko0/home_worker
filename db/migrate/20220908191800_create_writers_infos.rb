class CreateWritersInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :writers_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.float :rating
      t.references :subject, null: false, foreign_key: true

      t.timestamps
    end
  end
end
