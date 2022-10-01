import React, { Component } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import './App.css';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
       <main className='main-content'>
       <Routes>
          <Route path="/" element={<Navigate replace to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
       </main>

      </React.Fragment>
      </BrowserRouter>


    );
  }
}

export default App;
