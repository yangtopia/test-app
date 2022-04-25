import React from 'react';
import { AdminHospitalApi } from '@boostbrothers/web-admin-api';
import logo from './logo.svg';
import './App.css';

const api = new AdminHospitalApi();

console.log(api); //

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
