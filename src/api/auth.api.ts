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
      .get('localhost:8000/auth')
      .then((res: any) => {
        if (res) {
          throw res.error;
        }
        dispatch(authoriseSuccess(res));
        return res.products;
      })
      .catch((error) => {
        dispatch(authoriseError(error));
      });
  };
}

export default authoriseRequest;
