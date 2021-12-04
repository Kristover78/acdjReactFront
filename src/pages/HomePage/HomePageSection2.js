import React from "react";
import SectionImage from '../../assets/img/20191206_211356.jpg';

const HomePageSection2 = () => {
    return (
        <section>
            <div className="p-grid">
                <div className="p-col-5 p-offset-1">
                    <h3 className="text-center h3 mb-3">Découvrir de nouvelles pépites ludiques</h3>
                    <div className="p-grid">
                        <div className="p-col-2">
                            <i className="fas fa-star fa-2x pink-text" />
                        </div>
                        <div className="p-col-10">
                            <h5 className="feature-title">Avant première</h5>
                            <p className="grey-text">Nous essayons d'organiser des <strong>séances
                                découvertes</strong> avec des jeux pas encore sorti dans le commerce. Des prototypes
                                ou alors des exclusivités souvent sorti du monde Kickstarter.</p>
                        </div>
                        <div className="p-col-2">
                            <i className="fas fa-search fa-2x cyan-text" />
                        </div>
                        <div className="p-col-10">
                            <h5 className="feature-title">Tests avant achat</h5>
                            <p className="grey-text">Si vous avez l'intention d'acheter un jeu pour vous, mais vous
                                n'êtes pas sûr de votre choix,
                                alors rien de mieux que de venir le <strong>tester</strong> en association.
                            </p>
                        </div>
                        <div className="p-col-2">
                            <i className="fas fa-hand-holding fa-2x green-text" />
                        </div>
                        <div className="p-col-10">
                            <h5 className="feature-title">Prêt de jeu</h5>
                            <p className="grey-text">Nous essayons de constituer
                                une <strong>ludothèque</strong> avec certains titres phares. En tant qu'adhérent,
                                les jeux peuvent être <strong>emprunté gratuitement</strong> pour pouvoir être joué
                                tranquillement chez soi avec ses amis.</p>
                        </div>
                    </div>
                </div>
                <div className="p-col-5">
                    <img src={SectionImage} alt="Nouveaux jeux" />
                </div>
            </div>
        </section>
    )
}

export default HomePageSection2;
