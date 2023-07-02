import { searchRobots, requestRobots } from './reducers';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

describe('searchRobots reducer', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    const action = {
      type: CHANGE_SEARCHFIELD,
      payload: 'test'
    };
    const expectedState = {
      searchField: 'test'
    };
    expect(searchRobots(initialStateSearch, action)).toEqual(expectedState);
  });
});

describe('requestRobots reducer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: true
  };

  it('should return the initial state', () => {
    expect(requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    const action = {
      type: REQUEST_ROBOTS_PENDING
    };
    const expectedState = {
      robots: [],
      isPending: true
    };
    expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const action = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{ id: 1, name: 'Robot 1' }, { id: 2, name: 'Robot 2' }]
    };
    const expectedState = {
      robots: [{ id: 1, name: 'Robot 1' }, { id: 2, name: 'Robot 2' }],
      isPending: false
    };
    expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const action = {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Error'
    };
    const expectedState = {
      robots: [],
      isPending: true,
      error: 'Error'
    };
    expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
  });
});
