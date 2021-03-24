import React from "react";
import {
    MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,
    MDBCol, MDBContainer, MDBIcon, MDBInput,
    MDBRow,
} from 'mdbreact';
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import SectionImage from "../assets/img/imgContacts.jpg";
import MapWithAMarker from "../components/gmap";

const ContactPage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '5rem' }}>
                <MDBContainer>
                    <h2 className="text-center mb-3">Contact</h2>
                    <section className="mt-5 wow fadeIn">
                        <MDBRow>
                            <MDBCol md="6" className="mb-4">
                                <p>Si vous êtes intéressé(e) pour découvrir notre activité, vous pouvez vous joindre
                                    à nous lors de n'importe quelle séance, notre porte vous est grande ouverte.</p>
                                <p>Nous nous réunissons tous les 15 jours en alternance sur les vendredis ou samedis
                                    soir, de 19h30 à 23h30 (officiellement ;-) )
                                    dans la salle municipale des Maréchaux. Cf. adresse ci-dessous.</p>
                                <p>L'adhésion est de 15 euros pour une saison (année scolaire) ;
                                    Prix de groupe famille et couple : +5 € au dela de la première personne ! (nous
                                    nous arrangerons bien sûr si vous nous rejoignez en cours d'année)</p>
                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <MDBAnimation reveal type='fadeIn'>
                                    <img src={SectionImage} width={"80%"} className="img-fluid z-depth-1-half" alt=""/>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4">
                                <div id="map-container" className="z-depth-1-half map-container mb-5"
                                     style={{height: "300px"}}>
                                    <MapWithAMarker
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGlXoAwIsSlO_Tuwtcfnj1UbefTwRcsWQ&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                Salle des Maréchaux<br/>
                                5, Résidence Les Maréchaux<br/>
                                78700 Conflans Ste Honorine<br/>
                                (Près du marché de Chennevières)
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default ContactPage;
