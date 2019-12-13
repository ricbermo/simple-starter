import {createReducer} from '@reduxjs/toolkit';
import {getTodos} from 'actions';
import {INITIAL_STATE, ADD_TODO} from 'constants';

const reducer = createReducer(INITIAL_STATE, {
  [ADD_TODO]: (state, {payload}) => {
    state.todos.push(payload);
  },
  [String(getTodos.pending)]: state => {
    state.loadingState = 'pending';
  },
  [String(getTodos.fulfilled)]: (state, {payload}) => {
    state.loadingState = 'loaded';
    state.todos = payload;
  },
  [String(getTodos.rejected)]: (state, {payload}) => {
    state.error = payload;
    state.loadingState = 'rejected';
  },
});

export default reducer;
