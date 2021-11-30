import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <div className="exception-type">
                <img  src="../assets/img/404.svg" alt="404"/>
            </div>

            <div className="card exception-panel">
                <i className="material-icons">&#xE001;</i>
                <h1>Page Not Found</h1>
                <div className="exception-detail">Oups. La page que vous cherchez n'existe pas.</div>
                <Link to="/">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    )
}

export default NotFound;
