/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Form from './components/Todo/Form';

function App() {
  return (
    <div className="App">
      <Timer />
      <Form />
    </div>
  );
}

export default App;
