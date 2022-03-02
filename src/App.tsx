import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import DepositPage from './pages/deposit';
import BorrowPage from './pages/borrow';
import Layout from './layout';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/borrow" element={<BorrowPage />} />
        <Route path="*" element={<Navigate to="/deposit" />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
