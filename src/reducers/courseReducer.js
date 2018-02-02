import * as types from '../actions/actionTypes';

const initialState=[{
  courses:["Test"]
}];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCES:
      return action.courses;
    default:
      return state;
  }
}
