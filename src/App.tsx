// src/App.tsx

import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import ReactGA from 'react-ga4'
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './pages/Home';

const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const TRACKING_ID = "G-2175DT619Q";

const App: React.FC = () => {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  const darkMode = useAppSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<div>Loading Skills...</div>}>
                  <Skills />
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<div>Loading Experience...</div>}>
                  <Experience />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<div>Loading Projects...</div>}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading Contact...</div>}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
        <Footer />
        <DarkModeToggle />
      </Router>
    </div>
  );
};

export default App;
