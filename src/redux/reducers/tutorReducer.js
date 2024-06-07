import { ADD_TUTOR, EDIT_TUTOR, DELETE_TUTOR, FILTER_TUTORS } from '../actions/tutorActions';

const initialState = {
  allTutors: [{"name": "Angela", "lastName": "Novakovic", "username":"Angela","password":"unknown", "subject":"organic"},{"name": "Angela", "lastName": "Novakovic", "username":"Angela2","password":"unknown", "subject": "physical"}],
  filteredTutors: [],
};

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TUTOR:
      return {
        ...state,
        allTutors: [...state.allTutors, action.payload],
      };
    case EDIT_TUTOR:
      console.log(action)
      return {
        ...state,
        allTutors: state.allTutors.map((tutor) => {
          return(tutor.id === action.payload.id ? action.payload.updatedTutor : tutor)
        }),
      };
    case DELETE_TUTOR:
      return {
        ...state,
        allTutors: state.allTutors.filter((tutor) => tutor.id !== action.payload),
      };
    case FILTER_TUTORS:
      return {
        ...state,
        filteredTutors: state.allTutors.filter((tutor) => tutor.subject === action.payload),
      };
    default:
      return state;
  }
};

export default tutorReducer;

