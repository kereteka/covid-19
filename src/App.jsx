import { CountryDetailsPage } from './pages/country-details';
import { HomePage } from './pages/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
            <HomePage />
        }
      />
      <Route
        path= "country/:id"
        element={
            <CountryDetailsPage />
        }
      />
    </Routes>
  </Router>
  )
}

export default App;
