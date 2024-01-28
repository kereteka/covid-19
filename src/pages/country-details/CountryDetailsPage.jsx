import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountryDetailsRequest } from '../../actions/countryDetailsActions';
import { calculateTotal } from '../../utils/calculate-total';

export const loadingSpinner = (
  <span className="loading loading-spinner loading-md mx-auto" data-testid="loading-spinner"></span>
);
const CountryDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { countryDetails, loading, error } = useSelector(
    (state) => state.countryDetails
  );
  useEffect(() => {
    dispatch(fetchCountryDetailsRequest(id));
  }, [dispatch, id]);

  const memoizedCalculateTotal = useMemo(() => calculateTotal, []);
 
  const errorHolder = <p>Error: {error}</p>;
  // eslint-disable-next-line react/prop-types
  const Stat = ({ title, type }) => (
    <div className="stat">
      <div className="stat-title">{title}</div>
      {loading
        ? loadingSpinner
        : error
        ? errorHolder
        : countryDetails && countryDetails.length !== 0 && (
            <div className="stat-value">
              {memoizedCalculateTotal(countryDetails, type)}
            </div>
          )}
    </div>
  );
  return (
    <div className="w-full h-screen ">
      <div className="w-64 stats-vertical shadow text-center mx-auto mt-12 ">
        <h2>
          Country Covid-19 Details for{' '}
          {countryDetails && !loading ? countryDetails[0]?.region?.name : '-'}
        </h2>
        <div className="stat">
          <div className="stat-title"> Last Update</div>
          <div className="pt-3">
            {loading
              ? loadingSpinner
              : error
              ? errorHolder
              : countryDetails && countryDetails[0]?.last_update}
          </div>
        </div>
        <Stat title="Active Cases" type="active" />
        <Stat title="Confirmed Cases" type="confirmed" />
        <Stat title="Deaths" type="deaths" />
        <Stat title="Recovered" type="recovered" />
      </div>
    </div>
  );
};

export default CountryDetailsPage;
