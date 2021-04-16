import axios from 'axios';
import {
  authorise,
  authoriseError,
  authoriseSuccess,
} from '../store/actions/authActions';

function authoriseRequest() {
  return (dispatch: any) => {
    dispatch(authorise('123'));
    axios
      .get('http://localhost:8000/auth')
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
