import React from "react";
import SectionImage from '../../assets/img/20160909_214748.jpg';
import './style.css';

const HomePageSection1 = () => {
    return (
        <section>
            <div className="p-grid">
                <div className="p-col-5 p-offset-1">
                    <img src={SectionImage} className="p-shadow-4" alt="Des compagnons" />
                </div>
                <div className="p-col-5">
                    <h2>Trouver de nouveaux partenaires</h2>
                    <p>Vous en avez marre de tourner en rond..., envie de <strong>nouveaux
                        partenaires</strong> de jeu ? de découvrir des <strong>nouvelles
                        stratégies</strong> auxquelles vous n'auriez même pas pensé ?</p>
                    <p>Rien de mieux donc que de rejoindre une association qui pourra répondre à
                        (presque) toutes vos attentes.
                        Diversifier ainsi le challenge dans la joie et la bonne humeur.
                        C'est l'occasion aussi de faire de nouvelles belles <strong>rencontres</strong>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePageSection1;
