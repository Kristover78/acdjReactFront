import React, {Component} from "react";
import ACDJNavbar from "../components/acdjNavbar";
import ACDJFooter from "../components/acdjFooter";
import {Tooltip} from "primereact/tooltip";
import {GMap} from "primereact/gmap";
import SectionImage from "../assets/img/imgContacts.jpg";
import FicheInscription from "../assets/Fiche inscription.pdf";

const google = window.google;
const options = {
    center: {lat: 49.005167, lng: 2.113702},
    zoom: 10
};
const overlays = [
    new google.maps.Marker({position: {lat: 49.005167, lng: 2.113702}, title:"Salle des Maréchaux"})
];

class ContactPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <ACDJNavbar homepage={false}/>
                </header>
                <main style={{marginTop: '4rem'}}>
                    <div className="p-grid">
                        <div className="p-col-12 p-sm-offset-1 p-sm-10 p-md-offset-2 p-md-8 p-lg-offset-3 p-lg-6">
                            <h2 className="text-center mb-3">Contact</h2>
                            <section>
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-6">
                                        <Tooltip target=".pdf-file" mouseTrack mouseTrackLeft={10}/>
                                        <p>Si vous êtes intéressé(e) pour découvrir notre activité, vous pouvez nous
                                            rejoindre
                                            lors de n'importe quelle séance. Notre porte vous est grande ouverte.</p>
                                        <p>Nous nous réunissons tous les 15 jours en alternance sur les vendredis ou
                                            samedis
                                            soir, de 20h00 à 23h30 (officiellement ;-) )
                                            dans la salle municipale des Maréchaux. Cf. adresse ci-dessous.</p>
                                        <p>L'adhésion est de 15 euros pour une saison (année scolaire) ;
                                            Prix de groupe famille et couple : +5 € au dela de la première personne !
                                            (nous
                                            nous arrangerons bien sûr si vous nous rejoignez en cours d'année)
                                            <a href={FicheInscription}><i className="pi pi-file-pdf pdf-file"
                                                                          data-pr-tooltip="Fiche d'Inscription"
                                                                          data-pr-position="right"/></a></p>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <img src={SectionImage} width="100%" className="p-shadow-4" alt="People"/>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-text-center p-mb-5"><span className="bold-text">Salle des Maréchaux<br/>
                                            5, Résidence Les Maréchaux<br/>
                                            78700 Conflans Ste Honorine<br/>
                                                (Près du marché de Chennevières)</span><br /><br />
                                            <a href="mailto:contact@au-confluent-des-jeux.fr">Contacter l'association</a>
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div id="map-container" className="p-shadow-4 map-container mb-5">
                                            <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <footer>
                    <ACDJFooter/>
                </footer>
            </div>
        );
    }
}

export default ContactPage;
