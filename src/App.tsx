import React from 'react';
import logo from '@assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header 2">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 1 <code>src/App.tsx</code> and save to reload. s 3
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
