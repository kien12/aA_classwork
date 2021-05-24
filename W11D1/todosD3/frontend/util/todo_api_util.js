import { $CombinedState } from "redux"

export const fetchTodo = () => {
    return $CombinedState.ajax({
        url: '/api/todo',
        method: 'GET'
    })
}

