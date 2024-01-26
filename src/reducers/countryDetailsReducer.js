import {
  FETCH_COUNTRY_DETAILS_REQUEST,
  FETCH_COUNTRY_DETAILS_SUCCESS,
  FETCH_COUNTRY_DETAILS_FAILURE,
} from '../actions/countryDetailsActions';

const initialState = {
  countryDetails: null,
  loading: false,
  error: null,
};

const countryDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COUNTRY_DETAILS_SUCCESS:
      return { ...state, loading: false, countryDetails: action.payload };
    case FETCH_COUNTRY_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default countryDetailsReducer;
