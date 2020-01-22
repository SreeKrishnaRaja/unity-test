import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const navi = navigator.userAgent;
  var UIAB = typeof UnityInAppBrowser === 'object' ? UnityInAppBrowser : { sendMessageFromJS: (message) => {console.log(`The message is: ${message}`)}, failed: 'yes 2'};
  UIAB.sendMessageFromJS('ping')
  console.log(UIAB);
  return (
    <div className="App" id="im testing">
      <header className="App-header">
        <p>Yahoo! x</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Title: {document.title}</p>
  {Object.keys(UnityInAppBrowser).map(i => <p>{i}</p>)}
      </header>
    </div>
  );
}

export default App;
