import {createAction} from '@reduxjs/toolkit';
import {createAsyncAction} from 'redux-promise-middleware-actions';
import {fetchTodos} from 'api';
import {FETCH_TODOS, ADD_TODO} from 'constants';

export const getTodos = createAsyncAction(FETCH_TODOS, fetchTodos);
export const addTodo = createAction(ADD_TODO);
