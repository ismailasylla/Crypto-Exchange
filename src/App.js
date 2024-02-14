import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import Navbar from './components/Navbar';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./components/HomePage'));
const Exchanges = lazy(() => import('./components/Exchanges'));
const Cryptocurrencies = lazy(() => import('./components/Cryptocurrencies'));
const CrytoDetails = lazy(() => import('./components/CrytoDetails'));
const News = lazy(() => import('./components/News'));

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route
                path="/"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                  >
                    <Suspense fallback={<Loader />}>
                      <HomePage />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/exchanges"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                  >
                    <Suspense fallback={<Loader />}>
                      <Exchanges />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/cryptocurrencies"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                  >
                    <Suspense fallback={<Loader />}>
                      <Cryptocurrencies />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/cryto/:coinId"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                  >
                    <Suspense fallback={<Loader />}>
                      <CrytoDetails />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/news"
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                  >
                    <Suspense fallback={<Loader />}>
                      <News />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Crypto Exchange <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
