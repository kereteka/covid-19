import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COUNTRY_DETAILS_REQUEST,
  fetchCountryDetailsSuccess,
  fetchCountryDetailsFailure,
} from '../actions/countryDetailsActions';
import { api } from '../utils/api';

function* fetchCountryDetails(action) {
  const { isoCode } = action.payload;

  try {
    const response = yield call(api.fetchCountryDetailsRequest, isoCode);
    const { data } = yield call([response, 'json']);

    if (data.length === 0) {
      throw new Error('Data not found');
    }
        yield put(fetchCountryDetailsSuccess(data));
    
  } catch (error) {
    yield put(fetchCountryDetailsFailure(error.message));
  }
}

function* countryDetailsSaga() {
  yield takeLatest(FETCH_COUNTRY_DETAILS_REQUEST, fetchCountryDetails);
}

export default countryDetailsSaga;
