import { SET_CHARTS_REQUEST, SET_CHARTS } from 'actions'

const initialState = {
  data: [],
}

export default function charts(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CHARTS_REQUEST:
      return {
        ...state,
      }
    case SET_CHARTS:
      return {
        ...state,
        data: payload,
      }

    default:
      return state
  }
}
