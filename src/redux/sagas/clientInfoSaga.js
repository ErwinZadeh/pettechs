import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* clientInfoSaga() {
  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
  //  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
}

function *getClientInfo() {
  try {
    const response = yield axios.get(`/api/client`);
    yield put({
      type: "SET_CLIENT_DATA",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

// //Get client Dashboard Information
// function* getClientDashboard(action) {
//   try {
//     console.log('--------> from client  dashboard')
//     const clientResponse = yield axios.get(`/api/client`);
//      const petResponse = yield axios.get(`/api/pet`);
//     yield put({
//       type: "GET_CLIENT_DATA",
//       payload: clientResponse.data,
//     });
//     console.log("here is data from client", clientResponse.data);
//   } catch (error) {
//     console.log("Error with get client info:", error);
//   }
// }

function* updateClientData(action) {
      try {
      console.log('from in updateClientData', action.payload)
      const response = yield axios.put(`/api/client`, action.payload);
      yield put({
        type: "GET_CLIENT_DATA",
        payload: action.payload,
      });

    } catch (error) {
      console.log("Error with get pet data:", error);
    }
}


export default clientInfoSaga;
