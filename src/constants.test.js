import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
  } from './constants';
  
  describe('Action Constants', () => {
    it('should have the correct value for CHANGE_SEARCHFIELD', () => {
      expect(CHANGE_SEARCHFIELD).toEqual('CHANGE_SEARCHFIELD');
    });
  
    it('should have the correct value for REQUEST_ROBOTS_PENDING', () => {
      expect(REQUEST_ROBOTS_PENDING).toEqual('REQUEST_ROBOTS_PENDING');
    });
  
    it('should have the correct value for REQUEST_ROBOTS_SUCCESS', () => {
      expect(REQUEST_ROBOTS_SUCCESS).toEqual('REQUEST_ROBOTS_SUCCESS');
    });
  
    it('should have the correct value for REQUEST_ROBOTS_FAILED', () => {
      expect(REQUEST_ROBOTS_FAILED).toEqual('REQUEST_ROBOTS_FAILED');
    });
  });
  