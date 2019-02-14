import { createAction, createReducer } from 'redux-starter-kit'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload
})

 export default counterReducer;