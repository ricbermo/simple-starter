import * as actions from '../todos';
import {ADD_TODO} from 'constants';

describe('TODOs sample tests', () => {
  describe('addTodo', () => {
    it('returns the expected action', () => {
      const action = actions.addTodo('value');
      const expected = {
        type: ADD_TODO,
        payload: 'value',
      };

      expect(action).toEqual(expected);
    });
  });
});
