class Api::TodosController < ApplicationController
    def index 
        @todos = Todo.all 
        render json: @todos 
    end

    def show
        debugger
        @todo = Todo.find_by(params[:id])
        render json: @todo 
    end

    def new 
        render :new 
    end

    def create
        @newTodo = Todo.new(todo_params);
        if newTodo.save
            render json: @newTodo 
        else 
            # flash[:errors] = @newTodo.errors.full_messages
            render json: @newTodo.errors.full_messages, status: 422
        end
    end

    private
    def todo_params(params)
        params.require(:todos).permit(:title, :body, :done)
    end 
end
