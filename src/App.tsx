import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightHome from './pages/FlightHome/FlightHome';
import HotelHome from './pages/HotelHome/HotelHome';
import MainLayout from './layout/MainLayout';
import SearchFlights from './pages/FlightHome/components/SearchFlights';
import SearchHotel from './pages/HotelHome/components/SearchHotel';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/hotel"
          element={
            <MainLayout component={<SearchHotel />}>
              <HotelHome />
            </MainLayout>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout component={<SearchFlights />}>
              <FlightHome />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
