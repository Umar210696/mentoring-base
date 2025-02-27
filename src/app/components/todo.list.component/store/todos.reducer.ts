import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todos.list.component";
import { TodosActions } from './todo.actions';

 const initialState: {todos: Todo[]} = {
    todos: [],
 };

 export const todoReducer = createReducer (
   initialState,
   on(TodosActions.set, (state, payload) => ({
    ...state,
    todos: payload.todos
   })),
   on(TodosActions.create, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
   })),
   on(TodosActions.delete, (state,payload) => ({
    ...state,
    todos: state.todos. filter((todo) => todo.id !==payload.id),
   }))
 )