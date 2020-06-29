import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* dogVetSaga() {
    yield takeLatest("GET_DOG_VETS", getDogVets)
    yield takeLatest("GET_CAT_VETS", getCatVets)
}

//FILTER TEST
function* getDogVets(action) {
    try {
        const response = yield axios.get(`/api/vt/dog`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}
function* getCatVets(action) {
    try {
        const response = yield axios.get(`/api/vt/cat`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}


export default dogVetSaga;
