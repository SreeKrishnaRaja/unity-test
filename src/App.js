import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const navi = navigator.userAgent;
  const is1 = Boolean(localStorage);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{navi}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {is1 && <p>1</p>}
      </header>
    </div>
  );
}

export default App;
