export const ADD_TUTOR = 'ADD_TUTOR';
export const EDIT_TUTOR = 'EDIT_TUTOR';
export const DELETE_TUTOR = 'DELETE_TUTOR';
export const FILTER_TUTORS = 'FILTER_TUTORS';

export const addTutor = (tutor) => ({
  type: ADD_TUTOR,
  payload: tutor,
});

export const editTutor = (id, updatedTutor) => ({
  type: EDIT_TUTOR,
  payload: { id, updatedTutor },
});

export const deleteTutor = (id) => ({
  type: DELETE_TUTOR,
  payload: id,
});

export const filterTutors = (subject) => ({
  type: FILTER_TUTORS,
  payload: subject,
});
