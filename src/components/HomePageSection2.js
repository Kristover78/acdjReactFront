import React from "react";
import SectionImage from '../assets/img/20191206_211356.jpg';
import {MDBCol, MDBRow, MDBAnimation} from "mdbreact";

class HomePageSection2 extends React.Component {
    render() {
        return (
            <section>
                <MDBRow className="mb-4 wow fadeIn">
                    <MDBCol lg="6" md="12" className="px-4">
                        <h3 className="h3 mb-3">Découvrir de nouvelles pépites ludiques</h3>
                        <div className="row">
                            <div className="col-1 mr-3">
                                <i className="fas fa-star fa-2x pink-text" />
                            </div>
                            <div className="col-10">
                                <h5 className="feature-title">Avant première</h5>
                                <p className="grey-text">Nous essayons d'organiser des <strong>séances
                                    découvertes</strong> avec des jeux pas encore sorti dans le commerce. Des prototypes
                                    ou alors des exclusivités souvent sorti du monde Kickstarter.</p>
                            </div>
                        </div>

                        <div style={{height:"30px"}} />

                        <div className="row">
                            <div className="col-1 mr-3">
                                <i className="fas fa-search fa-2x cyan-text" />
                            </div>
                            <div className="col-10">
                                <h5 className="feature-title">Tests avant achat</h5>
                                <p className="grey-text">Si vous avez l'intention d'acheter un jeu pour vous, mais vous
                                    n'êtes pas sûr du choix,
                                    alors rien de mieux que de venir le <strong>tester</strong> en association.
                                </p>
                            </div>
                        </div>

                        <div style={{height:"30px"}} />

                        <div className="row">
                            <div className="col-1 mr-3">
                                <i className="fas fa-hand-holding fa-2x green-text" />
                            </div>
                            <div className="col-10">
                                <h5 className="feature-title">Prêt de jeu</h5>
                                <p className="grey-text">Nous essayons de constituer
                                    une <strong>ludothèque</strong> avec certains titres phares.
                                    Les jeux peuvent être <strong>emprunté gratuitement</strong> pour pouvoir être joué
                                    tranquillement chez soi.</p>
                            </div>
                        </div>
                    </MDBCol>

                    <div className="col-lg-6 col-md-12">
                        <MDBAnimation reveal type='fadeIn'>
                            <img src={SectionImage} className="img-fluid z-depth-1-half" alt="" />
                        </MDBAnimation>
                    </div>
                </MDBRow>
            </section>
        )
    }
}

export default HomePageSection2;