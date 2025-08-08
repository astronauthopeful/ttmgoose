import React from 'react';
import './App.css';
import Chatbot from './Chatbot';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gen AI Chatbot</h1>
        <Chatbot />
      </header>
    </div>
  );
}

export default App;
