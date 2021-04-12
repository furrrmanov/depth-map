export const SET_CHARTS_REQUEST = 'SET_CHARTS_REQUEST'
export const SET_CHARTS = 'SET_CHARTS'
export const CREATE_CHARTS = 'CREATE_CHARTS'
export const DELETE_CHARTS = 'DELETE_CHARTS' 

export const setChartsRequest = () => ({
  type: SET_CHARTS_REQUEST,
})

export const setCharts = (value) => ({
  type: SET_CHARTS,
  payload: value,
})

export const createCharts = (value) => ({
  type: CREATE_CHARTS,
  payload: value,
})

export const deleteCharts = (value) => ({
  type: DELETE_CHARTS,
  payload: value,
})
