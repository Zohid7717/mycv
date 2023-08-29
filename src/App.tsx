import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home/Home';

import './App.css';

const Work = React.lazy(() => import('./pages/Work/Work'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayouts />}>
          <Route path='' element={
            <Suspense fallback={
              <p>Loading...</p>
            }>
              <Home />
            </Suspense>
          } />
          <Route path='work' element={
            <Suspense fallback={
              <p>Loading...</p>
            }>
              <Work />
            </Suspense>
          } />
          <Route path='contact' element={
            <Suspense fallback={
              <p>Loading...</p>
            }>
              <Contact />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
