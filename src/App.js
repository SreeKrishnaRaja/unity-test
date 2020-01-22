import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const navi = navigator.userAgent;
  const is1 = Boolean(localStorage);
  const v = JSON.stringify(navigator);
  const x = typeof UnityInAppBrowser;
  UnityInAppBrowser.sendMessageFromJS('ping')
  return (
    <div className="App" id="im testing">
      <header className="App-header">
        <p>Yahoo!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{navi}</p>
<p>{x}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {is1 && <p>1</p>}
        <p>Title: {document.title}</p>
        {navigator.appName}<br /> {navigator.appCodeName}, <br />{navigator.appVersion}, <br />{navigator.vendor},<br /> {navigator.product}, <br />{navigator.appVersion}
      </header>
    </div>
  );
}

export default App;
