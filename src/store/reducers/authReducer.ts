import {
  AUTHORISE,
  AUTHORISE_SUCCESS,
  AUTHORISE_ERROR,
} from '../actions/authActions';

export interface AuthState {
  authPending: boolean;
  authToken: string;
  authError: string;
}

const initialState: AuthState = {
  authPending: false,
  authToken: '',
  authError: '',
};

export const authReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case AUTHORISE:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case AUTHORISE_SUCCESS:
      return {
        ...state,
        authToken: action.payload,
        pending: false,
      };
    case AUTHORISE_ERROR:
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};
