import http from '../utils/api';
import {
  authorise,
  authoriseError,
  authoriseSuccess,
} from '../store/actions/authActions';
import { resetAuthToken, setAuthToken } from '../utils/auth.utils';

function authoriseRequest(authData: { username: string; password: string }) {
  return (dispatch: any) => {
    dispatch(authorise('123'));
    http
      .post('http://localhost:8000/auth', { ...authData })
      .then((res: any) => {
        const token = res.data.token;
        dispatch(authoriseSuccess(token));
        setAuthToken(token);
        return res.data.token;
      })
      .catch((error) => {
        resetAuthToken();
        dispatch(authoriseError(error));
      });
  };
}

export default authoriseRequest;
