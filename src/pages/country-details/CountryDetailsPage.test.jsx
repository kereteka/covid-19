// import React from 'react'
// import { screen } from '@testing-library/react'
// // import { http, rest, HttpResponse, delay } from 'msw'
// // import { setupServer } from 'msw/node'
// // We're using our own custom render function and not RTL's render.
// import { renderWithProviders } from '../../utils/test-utils' 
// import CountryDetailsPage from './CountryDetailsPage'
// import { mockServer } from '../../mocks/mockServer'


// export const handlers = [
//   http.get('https://covid-19-statistics.p.rapidapi.com/reports?iso=', async () => {
//     await delay(150)
//     return HttpResponse.json({
//       "data": [
//           {
//               "date": "2023-03-09",
//               "confirmed": 17042722,
//               "deaths": 101492,
//               "recovered": 0,
//               "confirmed_diff": 0,
//               "deaths_diff": 0,
//               "recovered_diff": 0,
//               "last_update": "2023-01-30 23:20:55",
//               "active": 16941230,
//               "active_diff": 0,
//               "fatality_rate": 0.006,
//               "region": {
//                   "iso": "TUR",
//                   "name": "Turkey",
//                   "province": "",
//                   "lat": "38.9637",
//                   "long": "35.2433",
//                   "cities": []
//               }
//           }
//       ]
//   })
//   })
// ]

// const server = setupServer(...handlers)

// Enable API mocking before tests.
// beforeAll(() => server.listen())

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers())

// // Disable API mocking after the tests are done.
// afterAll(() => server.close())
// const server = mockServer();
// server.use()
// test('fetches & receives country details while the page is loading', async () => {
//   renderWithProviders(<CountryDetailsPage />)
//   expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

//   expect(await screen.findByText(/2023-03-09/i)).toBeInTheDocument()
//   expect(await screen.findByText(/101492/i)).toBeInTheDocument()
//   expect(await screen.findByText(/16941230/i)).toBeInTheDocument()
//   expect(await screen.findByText(/17042722/i)).toBeInTheDocument()

//   expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument()
//   expect(screen.queryByTestId('loading-spinner')).toBeNull();
// })

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CountryDetailsPage from './CountryDetailsPage';
import { renderWithProviders } from '../../utils/test-utils';

// Test için özel bir render fonksiyonu oluşturun
const renderPageWithProvidersAndRouter = (route = '/country/TUR') => {
  renderWithProviders(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/country/:id" element={<CountryDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('CountryDetailsPage Tests', () => {
  it('fetches & receives country details while the page is loading', async () => {
    renderPageWithProvidersAndRouter();

    const spinners = screen.queryAllByTestId('loading-spinner');
    expect(spinners.length).toBeGreaterThan(0); 
    // expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(await screen.findByText(/2023-01-30/i)).toBeInTheDocument()
    expect(await screen.findByText(/101492/i)).toBeInTheDocument()
    expect(await screen.findByText(/16941230/i)).toBeInTheDocument()
    expect(await screen.findByText(/17042722/i)).toBeInTheDocument()
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument()
    expect(screen.queryByTestId('loading-spinner')).toBeNull();
  });
});

