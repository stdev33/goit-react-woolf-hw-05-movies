import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('../pages/Home'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export { App };
