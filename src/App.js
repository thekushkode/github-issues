import React from 'react';
import './App.css';
import IssueList from './components/IssueList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IssueDetail from './components/IssueDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GitHub Issues</h1>
        </header>
        <Switch>
          <Route exact path='/' component={IssueList}></Route>
          <Route path='/issue/:issue_number' component={IssueDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
