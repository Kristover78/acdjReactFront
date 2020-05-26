import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from "./pages/HomePage";
//import Auth from './Auth';
//const auth = new Auth();
// https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/
// https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/

class App extends Component {
  state = {
    collapseID: ''
  };

  render() {
    return (
      <Router>
        <div className='flyout'>
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default App;
