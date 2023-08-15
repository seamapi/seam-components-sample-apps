import {
  ConnectAccountButton,
  DeviceTable,
  SeamProvider,
} from '@seamapi/react'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <main>
        <h1>Seam Components</h1>
        <SeamProvider publishableKey="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL">
          <ConnectAccountButton className="connect-account-button" />
          <DeviceTable />
        </SeamProvider>
      </main>
    </div>
  );
}

export default App;
