import React, {Component} from 'react';

import {CookiesProvider} from "react-cookie";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import AppRoutes from "../../navigations/AppRoutes";
import appReducers from '../../services/redux/reducers.js'
import '../../assets/scss/main.scss';

//import Auth from './Auth';
//const auth = new Auth();
// https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/
// https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/

class Index extends Component {
    render() {
        let History = createBrowserHistory();
        let store = createStore(appReducers);

        return (
            <Provider store={store}>
                <CookiesProvider>
                    <Router history={History}>
                        <AppRoutes/>
                    </Router>
                </CookiesProvider>
            </Provider>
        );
    }
}

export default Index;
