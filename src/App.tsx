// src/App.tsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
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
                <Suspense fallback={<div>Loading Home...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading About...</div>}>
                  <About />
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
