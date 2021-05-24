class EditTodo < ActiveRecord::Migration[5.2]
  def change
    add_index :todos, :title
  end
end
