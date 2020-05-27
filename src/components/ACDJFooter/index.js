import React from "react";
import {MDBFooter} from "mdbreact";
import './style.css';

const ACDJFooter = () => {
    return (
        <MDBFooter>
            <div className="d-flex justify-content-around align-items-center">
                <div className="p-2 bd-highlight">au Confluent des Jeux depuis <strong>2013</strong></div>
                <div className="p-2 bd-highlight">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/mentions"><i className="fas fa-balance-scale fa-2x" /></a></li>
                        <li className="list-inline-item"><a href="https://discord.gg/EkxMDpy" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord fa-2x"/></a></li>
                        <li className="list-inline-item"><a href="https://www.facebook.com/groups/1409286095952547/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"/></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/SuperJoueur" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"/></a></li>
                        <li className="list-inline-item"><a href="/release"><i className="fas fa-code-branch fa-2x"/></a></li>
                    </ul>
                </div>
            </div>

        </MDBFooter>
    )
}

export default ACDJFooter;
