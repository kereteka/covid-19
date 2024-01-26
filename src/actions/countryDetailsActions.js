export const FETCH_COUNTRY_DETAILS_REQUEST = 'FETCH_COUNTRY_DETAILS_REQUEST';
export const FETCH_COUNTRY_DETAILS_SUCCESS = 'FETCH_COUNTRY_DETAILS_SUCCESS';
export const FETCH_COUNTRY_DETAILS_FAILURE = 'FETCH_COUNTRY_DETAILS_FAILURE';

export const fetchCountryDetailsRequest = (isoCode) => ({
  type: FETCH_COUNTRY_DETAILS_REQUEST,
  payload: { isoCode },
});

export const fetchCountryDetailsSuccess = (data) => ({
  type: FETCH_COUNTRY_DETAILS_SUCCESS,
  payload: data,
});

export const fetchCountryDetailsFailure = (error) => ({
  type: FETCH_COUNTRY_DETAILS_FAILURE,
  payload: error,
});
