// Action Types
export const AUTHORISE = 'AUTHORISE';
export const AUTHORISE_SUCCESS = 'AUTHORISE_SUCCESS';
export const AUTHORISE_ERROR = 'AUTHORISE_ERROR';

// Action creators
export const authorise = (data: any) => {
  return {
    type: AUTHORISE,
    payload: data,
  };
};

export const authoriseSuccess = (data: any) => {
  return {
    type: AUTHORISE_SUCCESS,
    payload: data,
  };
};

export const authoriseError = (data: any) => {
  return {
    type: AUTHORISE_ERROR,
    payload: data,
  };
};
