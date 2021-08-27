import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./components/App";
/*import {Cookify} from './assets/js/cookify.js'*/
/*
use of Material Design for Bootstrap (Free) & EBM Bootstrap Plugin, is under MIT License :

    Copyright (c) 2019 MDBootstrap.com
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import registerServiceWorker from './registerServiceWorker';
/*
window.top.cookify = new Cookify({
    'init': {
        'view': {
            'info': {
                'header': 'We use Cookies',
                'text': 'This website uses cookies to ensure you get the best experience on our website.',
            },
            'manage': {
                'header': 'Cookies Management',
                'text': 'To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
            },
            'button': {
                'svg': 'cookie', // or 'fingerprint'
            },
        },
        'cookies': {
            'necessary': {
                'name': 'Necessary',
                'desc': 'Are necessary to run the website',
            },
            'analytics': {
                'name': 'Analytics',
                'desc': 'To analyse the website traffic',
            },
            // more cookies here
        },
    },
    'run': true // run on page load
});*/
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();
