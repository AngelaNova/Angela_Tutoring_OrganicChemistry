export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const ID_FOR_STUDENT = 'ID_FOR_STUDENT';

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

export const idForStudent = (student) => ({
  type: ID_FOR_STUDENT,
  payload: student,
});