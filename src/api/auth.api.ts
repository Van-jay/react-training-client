import axios from 'axios';
import {
  authorise,
  authoriseError,
  authoriseSuccess,
} from '../store/actions/authActions';

function authoriseRequest(authData: { username: string; password: string }) {
  return (dispatch: any) => {
    dispatch(authorise('123'));
    axios
      .post('http://localhost:8000/auth', authData)
      .then((res: any) => {
        dispatch(authoriseSuccess(res));
        return res.products;
      })
      .catch((error) => {
        dispatch(authoriseError(error));
      });
  };
}

export default authoriseRequest;
