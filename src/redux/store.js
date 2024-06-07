import { configureStore } from '@reduxjs/toolkit';
import tutorReducer from './reducers/tutorsReducer';
import studentReducer from './reducers/studentsReducer';

const store = configureStore({
  reducer: {
    students: studentReducer,
    tutors: tutorReducer,
  },
});

export default store;
