import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Members from './pages/Members';
import Sponsors from './pages/Sponsors';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Home from './pages/Home';
function App() {
  const location = useLocation()
  return (
    <div>
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
              <Route key="team" path="/members"  element= {<Members />}/>
              <Route key="sponsors" path="/sponsors"  element= {<Sponsors />}/>
              <Route key="home" path="/"  element= {<Home />}/>
              {/* TODO: Add other routes */}
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
