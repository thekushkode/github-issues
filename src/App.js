import React from 'react';
import './App.css';
import IssueList from './components/IssueList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IssueDetail from './components/IssueDetail';
import User from './components/User';
import UserRepos from './components/UserRepos';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header mb-4">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Github Issues Exercise</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to='/issue'><Nav.Link href="#home">Issue Details</Nav.Link></Link>
              <Link to='/user'><Nav.Link href="#home">Github Users</Nav.Link></Link>
              <Link to='/repos'><Nav.Link href="#home">User Repos</Nav.Link></Link>
            </Nav>
          </Navbar>
        </header>
        <Switch>
          <Route exact path='/' component={IssueList}></Route>
          <Route path='/issue/:issue_number' component={IssueDetail}></Route>
          <Route path='/user' component={User}></Route>
          <Route path='/repos' component={UserRepos}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
