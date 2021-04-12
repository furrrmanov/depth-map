import { all } from 'redux-saga/effects'

import {
  watchFetchChartsRequest,
  watchCreateCharts,
  watchDeleteCharts,
} from './charts'

export default function* rootSaga() {
  yield all([
    watchFetchChartsRequest(),
    watchCreateCharts(),
    watchDeleteCharts(),
  ])
}
