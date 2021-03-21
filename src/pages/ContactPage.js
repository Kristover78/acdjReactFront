import React from "react";
import {
    MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,
    MDBCol, MDBContainer, MDBIcon, MDBInput,
    MDBRow,
} from 'mdbreact';
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import SectionImage from "../assets/img/imgContacts.jpg";

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
                            <MDBCol md="6" className="mb-4">
                                <MDBAnimation reveal type='fadeIn'>
                                    <img src={SectionImage} className="img-fluid z-depth-1-half" alt=""/>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4">
                                <div id="map-container-google-1" className="z-depth-1-half map-container"
                                     style={{height: "300px"}}>
                                    <iframe
                                        title="google map"
                                        src="https://maps.google.com/maps?key=AIzaSyBGlXoAwIsSlO_Tuwtcfnj1UbefTwRcsWQ&q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0"
                                        style={{border:"0"}} allowFullScreen/>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                Salle des Maréchaux<br/>
                                5, Résidence Les Maréchaux<br/>
                                78700 Conflans Ste Honorine<br/>
                                (Près du marché de Chennevières)
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <div class="offset-md-4 col-md-4 mb-4">
                                <MDBCard>
                                    <MDBCardBody className="purple-gradient white-text">
                                        <MDBCardTitle className="text-center">Ecrivez-nous !</MDBCardTitle>
                                        <MDBCardText>
                                            <form class="needs-validation" novalidate>
                                                <p className="h5 text-center mb-4"></p>
                                                <div className="white-text">
                                                    <MDBInput label="Prénom" icon="user" group type="text" validate error="wrong"
                                                              success="right" required/>
                                                    <MDBInput label="Votre Email" icon="envelope" group type="email" validate error="wrong"
                                                              success="right" required />
                                                    <MDBInput label="Sujet" icon="tag" group type="text" validate error="wrong" success="right" />
                                                    <MDBInput type="textarea" rows="2" label="Votre message" icon="pencil-alt" required />
                                                </div>
                                                <div className="text-center">
                                                    <MDBBtn outline color="secondary">
                                                        Envoyer !
                                                        <MDBIcon far icon="paper-plane" className="ml-1" />
                                                    </MDBBtn>
                                                </div>
                                            </form>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
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
