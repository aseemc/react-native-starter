import axios from 'axios';
import Config from 'react-native-config';

const api = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type !== 'apiCallBegan') return;

  const {
    url,
    method = 'get',
    data,
    onStart,
    onSuccess,
    onFailure,
    options = {},
  } = action.payload;

  const { query = null, timeout = 30000, headers } = options;

  try {
    dispatch({ type: onStart });

    const response = await axios.request({
      baseURL: Config.API_BASE_URL,
      url,
      method,
      ...(data ? { data } : undefined),
      ...(query ? { params: query } : undefined),
      headers,
      timeout,
    });

    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: onFailure, payload: error.message });
  }
};

export default api;
