import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './Context/UserContext';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Documentation from './components/Pages/Documentation/Documentation';
import Exercises from './components/Pages/Activities/Exercises/Exercises';
import Review from './components/Pages/Activities/Review/Review';
import Login from './components/Pages/Login/Login';
import Playground from './components/Pages/Playground/Playground';
/* import Profile from './components/Pages/Profile/Profile'; */
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Home from './components/Pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="login/*" element={<Login />} exact />
              <Route path="docs/" element={<Documentation />} exact />
              {/* <ProtectedRoute path="profile" element={<Profile />} exact /> */}
              <ProtectedRoute
                path="exercises/*"
                element={<Exercises />}
                exact
              />
              <ProtectedRoute path="review/*" element={<Review />} exact />
              <Route path="playground" element={<Playground />} exact />
              <Route path="/" element={<Home />} exact />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
