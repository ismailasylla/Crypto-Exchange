import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import Navbar from './components/Navbar';

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
                  <Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path="/exchanges"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Exchanges />
                  </Suspense>
                }
              />
              <Route
                path="/cryptocurrencies"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Cryptocurrencies />
                  </Suspense>
                }
              />
              <Route
                path="/cryto/:coinId"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <CrytoDetails />
                  </Suspense>
                }
              />
              <Route
                path="/news"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <News />
                  </Suspense>
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
