import { ADD_TUTOR, EDIT_TUTOR, DELETE_TUTOR, FILTER_TUTORS } from '../actions/tutorsActions';

const initialState = {
  allTutors: [{"id": 0, "amount": 5, "date": "2024-05-27", "category":"food","description":"coffee"},{"id": 1, "amount": 4, "date": "2024-05-29", "category":"food","description":"donut"}],
  filteredTutors: [],
};

const tutorsReducer = (state = initialState, action) => {
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
        filteredTutors: state.allTutors.filter((tutor) => tutor.category === action.payload),
      };
    default:
      return state;
  }
};

export default tutorsReducer;

