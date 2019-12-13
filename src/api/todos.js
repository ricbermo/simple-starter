import {pathOr} from 'ramda';
import http from './http';

export function fetchTodos(options) {
  return http.get('/todos');
}
