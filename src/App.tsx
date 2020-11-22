import React from 'react';
import logo from './logo.svg';
import './styles/main.css';

function App() {
  return (
    <div className='text-center'>
      <header className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-4xl text-white'>
        <img
          src={logo}
          className='App-logo h-64 pointer-events-none'
          alt='logo'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='text-blue-300'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
