/* eslint-disable no-param-reassign */
import axios from 'axios';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

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
const { actions } = slice;

export const fetchRemoteUsers = () => async dispatch => {
  dispatch(actions.fetchUsers());

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(actions.fetchUsersSuccess(response.data));
  } catch (e) {
    dispatch(actions.fetchUserFailed(e.message));
  }
};

// Default state export
const useExampleState = () => {
  const exampleState = useSelector(allState);
  return [exampleState, { ...slice.actions, fetchRemoteUsers }];
};

export default useExampleState;
