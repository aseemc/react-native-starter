/* eslint-disable no-param-reassign */
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { serializeActions } from './utils';
import { API_CALL_BEGAN } from '../constants';

// Slice
const countInitialState = {
  count: 0,
};

const usersInitialState = {
  users: [],
  isFetchingUsers: false,
  error: null,
};

const initialState = {
  ...countInitialState,
  ...usersInitialState,
};

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    fetchUsers: state => {
      state.isFetchingUsers = true;
    },
    fetchUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.isFetchingUsers = false;
    },
    fetchUserFailed: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUsers = false;
    },
  },
});

// Selectors
export const allState = state => state.example;

// Async Actions
const { fetchUsers, fetchUsersSuccess, fetchUserFailed } = serializeActions(
  slice.actions
);

export const fetchRemoteUsers = () => dispatch =>
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: '/users',
      onStart: fetchUsers,
      onSuccess: fetchUsersSuccess,
      onFailure: fetchUserFailed,
    },
  });

// Default state export
const useExampleState = () => {
  const exampleState = useSelector(allState);
  return [exampleState, { ...slice.actions, fetchRemoteUsers }];
};

export default useExampleState;
