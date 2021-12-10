import React from 'react';
import { Link } from 'react-router-dom';
import Img404 from "../assets/img/404.jpg";

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img  src={Img404} alt="404"/>
            </div>

            <div className="text-center">
                <h1>Page inconnue</h1>
                <div className="exception-detail">Oups. La page que vous cherchez n'existe pas.</div>
                <Link to="/">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    )
}

export default NotFound;
