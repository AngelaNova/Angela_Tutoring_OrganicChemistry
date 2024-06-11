export const ADD_TUTOR = 'ADD_TUTOR';
export const EDIT_TUTOR = 'EDIT_TUTOR';
export const DELETE_TUTOR = 'DELETE_TUTOR';
export const ID_FOR_TUTOR = 'ID_FOR_TUTOR';

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

export const idForTutor = (tutor) => ({
  type: ID_FOR_TUTOR,
  payload: tutor,
});