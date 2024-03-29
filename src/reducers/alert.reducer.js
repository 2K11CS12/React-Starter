import { constants } from '../core/utils';

export function alert(state = {}, action) {
  switch (action.type) {
    case constants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case constants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case constants.CLEAR:
      return {};
    default:
      return state
  }
}