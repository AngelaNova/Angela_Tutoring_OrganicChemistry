export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const FILTER_STUDENTS = 'FILTER_STUDENTS';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (id, updatedStudent) => ({
  type: EDIT_STUDENT,
  payload: { id, updatedStudent },
});

export const deleteStudent = (id) => ({
  type: DELETE_STUDENT,
  payload: id,
});

export const filterStudents = (subject) => ({
  type: FILTER_STUDENTS,
  payload: subject,
});
