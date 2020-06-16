import React from 'react';
import './App.css';
import IssueList from './components/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Issues</h1>
      </header>
      <IssueList></IssueList>
    </div>
  );
}

export default App;
