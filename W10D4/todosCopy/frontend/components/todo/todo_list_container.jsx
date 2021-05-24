import {connect} from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = state => ({
    todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 