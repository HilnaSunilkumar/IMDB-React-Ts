import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GlobalStyle } from './GlobalStyle';
import {Header } from './components/Header';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Movie } from './components/Movie';

const App: React.FC = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
