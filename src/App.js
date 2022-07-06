import {BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./Home'))
const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/contact'  element={<Contact/>} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
