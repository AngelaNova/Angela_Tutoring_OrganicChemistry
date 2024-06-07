import { configureStore } from '@reduxjs/toolkit';
import tutorReducer from './reducers/tutorReducer';
import studentReducer from './reducers/studentReducer';

const store = configureStore({
  reducer: {
    students: studentReducer,
    tutors: tutorReducer,
  },
});

export default store;
