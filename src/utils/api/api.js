export const API_BASE_URL = 'https://covid-19-statistics.p.rapidapi.com/reports?iso=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cbe03dcc76msh35193f9eeb1bfffp1556a7jsn2cfb3be0524f',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
};
export const api = {
  fetchCountryDetailsRequest: (iso) => {
    return fetch(`${API_BASE_URL}${iso}`, options);
  },
};

export default api;
