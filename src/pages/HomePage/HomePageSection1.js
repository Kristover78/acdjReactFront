import React from "react";
import {MDBCol, MDBRow, MDBAnimation} from "mdbreact";
import SectionImage from '../../assets/img/20160909_214748.jpg';

const HomePageSection1 = () => {
    return (
        <section className="mt-5 wow fadeIn">
            <MDBRow>
                <MDBCol md="6" className="mb-4">
                    <MDBAnimation reveal type='fadeIn'>
                        <img src={SectionImage} className="img-fluid z-depth-1-half" alt=""/>
                    </MDBAnimation>
                </MDBCol>
                <div className="col-md-6 mb-4">
                    <h3 className="text-center h3 mb-3">Trouver de nouveaux partenaires</h3>
                    <p>Vous en avez marre de tourner en rond..., envie de <strong>nouveaux
                        partenaires</strong> de jeu ? de découvrir des <strong>nouvelles
                        stratégies</strong> auxquelles vous n'auriez même pas pensé ?</p>
                    <p>Rien de mieux donc que de rejoindre une association qui pourra répondre à
                        (presque) toutes vos attentes.
                        Diversifier ainsi le challenge dans la joie et la bonne humeur.
                        C'est l'occasion aussi de faire de nouvelles belles <strong>rencontres</strong>.
                    </p>
                </div>
            </MDBRow>
        </section>
    )
}

export default HomePageSection1;
