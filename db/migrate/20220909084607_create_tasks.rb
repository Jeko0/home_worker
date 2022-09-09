class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.float :salary
      t.boolean :finished, null: false, default: false
      t.datetime :finished_time, default: Time.now + 1.day
      t.integer :client_id, null: false, foreign_key: true
      t.integer :writer_id, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
