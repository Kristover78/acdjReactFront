import React from "react";
import {MDBFooter} from "mdbreact";
import './style.css';

const ACDJFooter = () => {
    return (
        <MDBFooter>
            <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com'> au-confluent-des-jeux.fr </a>
            </p>
        </MDBFooter>
    )
}

export default ACDJFooter;
