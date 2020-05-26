import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "../../navigations/Routes";
import ACDJNavbar from "../ACDJNavbar";
import ACDJFooter from "../ACDJFooter";
//import Auth from './Auth';
//const auth = new Auth();
// https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/
// https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/

class Index extends Component {
  state = {
    collapseID: ''
  };

  render() {
    return (
        <Router>
            <header>
                <ACDJNavbar/>
            </header>
            <main>
                <div className='flyout'>
                    <Routes/>
                </div>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </Router>
    );
  }
}

export default Index;
