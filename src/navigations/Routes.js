import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import InfoPage from "../pages/InfoPage";
import SeancesPage from "../pages/SeancesPage";
import ContactPage from "../pages/ContactPage";
import ForumPage from "../pages/ForumPage";
import MentionsPage from "../pages/MentionsPage";
import ReleasePage from "../pages/ReleasePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/info' component={InfoPage} />
        <Route exact path='/seances' component={SeancesPage} />
        <Route exact path='/forum' component={ForumPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/mentions' component={MentionsPage} />
        <Route exact path='/release' component={ReleasePage} />

        <Route
          render={function() {
            return <h1>Page Inconnue</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
