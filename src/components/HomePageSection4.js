import React from "react";
import SectionImage from '../assets/img/20170618_002153.jpg';
import {MDBCol, MDBRow, MDBAnimation} from "mdbreact";

class HomePageSection4 extends React.Component {
    render() {
        return (
            <section className="mt-5 wow fadeIn">
                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <h3 className="h3 mb-3">Participer à des tournois</h3>
                        <p>Tout au long de l'année nous essayons d'organiser des compétitions (7 Wonders, Blood Bowl,
                            Netrunner, etc...).</p>
                        <p>L'idée est de mettre en place une ligue permettant un classement avec, pourquoi pas, titre et
                            prix à la clef.</p>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        <MDBAnimation reveal type='fadeIn'>
                            <img src={SectionImage} className="img-fluid z-depth-1-half" alt="" />
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </section>
        )
    }
}

export default HomePageSection4;