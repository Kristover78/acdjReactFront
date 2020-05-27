import React from "react";
import SectionImage from '../assets/img/20191109_000556.jpg';
import {MDBCol, MDBRow, MDBAnimation} from "mdbreact";

const HomePageSection3 = () => {
    return (
        <section className="mt-5 wow fadeIn">
            <MDBRow>
                <MDBCol md="6" className="mb-4">
                    <MDBAnimation reveal type='fadeIn'>
                        <img src={SectionImage} className="img-fluid z-depth-1-half" alt=""/>
                    </MDBAnimation>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                    <h3 className="text-center h3 mb-3">Avoir peur</h3>
                    <p>Partir à l'<strong>aventure ludique</strong>, c'est savoir prendre des risques et choisir le
                        bon chemin pour atteindre ses objectifs.</p>
                    <p>Découvrir de nouveaux terrains de jeu, n'est-ce pas excitant ?!</p>
                </MDBCol>
            </MDBRow>
        </section>
    )
}

export default HomePageSection3;