import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: '',
    gender: '',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
    },
  },
});

export const {update} = userSlice.actions; //you can use this in update.js to send paylods to this update reducer

export default userSlice.reducer; //use this in store
