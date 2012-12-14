class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.int :update_count
      t.timestamps
    end
  end
end
