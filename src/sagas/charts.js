import { takeEvery, put, call, select } from 'redux-saga/effects'

import moment from 'moment'

import {
  sendDataInFirebaseDb,
  getDataInFirebaseDb,
  deleteEntityInCollection,
} from 'utils/firebase'
import { SET_CHARTS_REQUEST, CREATE_CHARTS, DELETE_CHARTS } from 'actions'

export function* watchFetchChartsRequest() {
  yield takeEvery(SET_CHARTS_REQUEST, workerGetCharts)
}

function* workerGetCharts() {
  yield getDataInFirebaseDb({ root: 'charts' })
}

export function* watchCreateCharts() {
  yield takeEvery(CREATE_CHARTS, workerCreateCharts)
}

function* workerCreateCharts({ payload }) {
  const data = {
    value: {
      date: moment().valueOf(),
      name: payload.name,
    },
    root: 'charts',
  }

  yield sendDataInFirebaseDb(data)
}

export function* watchDeleteCharts() {
  yield takeEvery(DELETE_CHARTS, workerDeleteCharts)
}

function* workerDeleteCharts({ payload }) {
  try {
    yield call(deleteEntityInCollection, {
      collectionName: `/${payload.root}`,
      collectionRoot: `/${payload.root}/`,
      id: payload.entityId,
    })
  } catch {}
}
