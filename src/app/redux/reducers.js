import { createReducer, createAction } from 'redux-starter-kit';



// Table of contacs

export const saveTable = createAction('table/savecontacts');

export const saveTableReducer = createReducer(
  [],
  {
    [saveTable]: (state, action) => state = action.payload
  });

  // Macth phone

export const matchPhone = createAction('isPhone/matchPhone');

export const isPhone = createReducer(
  window.matchMedia('(max-width: 700px)').matches,
  {
    [matchPhone]: (state, action) => state = action.payload
  });

export default {
  saveTableReducer,
  isPhone
};