import { takeEvery, put, call, select } from "redux-saga/effects"

import moment from "moment"

import {
  sendDataInFirebaseDb,
  getDataInFirebaseDb,
  deleteEntityInCollection,
  updateEntityInCollection,
} from "utils/firebase"
import {
  SET_CHARTS_REQUEST,
  CREATE_CHARTS,
  DELETE_CHARTS,
  CREATE_POINT,
  deleteCharts
} from "actions"
import { filteredEntityList } from "utils/dataMappers"

export function* watchFetchChartsRequest() {
  yield takeEvery(SET_CHARTS_REQUEST, workerGetCharts)
}

function* workerGetCharts() {
  try {
    yield getDataInFirebaseDb({ root: "charts" })
  } catch {}
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
    root: "charts",
  }

  yield sendDataInFirebaseDb(data)
}

export function* watchDeleteCharts() {
  yield takeEvery(DELETE_CHARTS, workerDeleteCharts)
}

function* workerDeleteCharts({ payload }) {
  try {
    yield put(deleteCharts(payload.entityId))
    yield call(deleteEntityInCollection, {
      collectionName: `/${payload.root}`,
      collectionRoot: `/${payload.root}/`,
      id: payload.entityId,
    })
  } catch {}
}

export function* watchCreatePoint() {
  yield takeEvery(CREATE_POINT, workerCreatePoint)
}

function* workerCreatePoint({ payload }) {
  try {
    console.log("create point", payload)

    const state = yield select()
    const entityList = filteredEntityList(
      state[payload.root].data,
      payload.id,
      payload.itemName
    )

    yield call(updateEntityInCollection, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.id,
      itemName: `${payload.itemName}`,
      data: [...entityList, payload.data],
    })
  } catch {}
}
