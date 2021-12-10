import React, { useEffect } from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import {Tooltip} from "primereact/tooltip";
import {GMap} from "primereact/gmap";
import SectionImage from "../assets/img/imgContacts.jpg";
import FicheInscription from "../assets/Fiche inscription.pdf";
import "./ContactPage.css";

const google = window.google;
const options = {
    center: {lat: 49.005167, lng: 2.113702},
    zoom: 10
};
const overlays = [
    new google.maps.Marker({position: {lat: 49.005167, lng: 2.113702}, title:"Salle des Maréchaux"})
];

const ContactPage = () => {

    useEffect(() => {
        console.log('Im inside useEffect hook')
    }, [])

    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
                <main style={{ marginTop: '4rem' }}>
                    <div className="p-grid">
                        <div className="p-offset-2 p-col-8">
                            <h2 className="text-center mb-3">Contact</h2>
                            <section>
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <Tooltip target=".pdf-file" mouseTrack mouseTrackLeft={10} />
                                        <p>Si vous êtes intéressé(e) pour découvrir notre activité, vous pouvez nous rejoindre
                                            lors de n'importe quelle séance. Notre porte vous est grande ouverte.</p>
                                        <p>Nous nous réunissons tous les 15 jours en alternance sur les vendredis ou samedis
                                            soir, de 20h00 à 23h30 (officiellement ;-) )
                                            dans la salle municipale des Maréchaux. Cf. adresse ci-dessous.</p>
                                        <p>L'adhésion est de 15 euros pour une saison (année scolaire) ;
                                            Prix de groupe famille et couple : +5 € au dela de la première personne ! (nous
                                            nous arrangerons bien sûr si vous nous rejoignez en cours d'année)
                                            <a href={FicheInscription}><i className="pi pi-file-pdf pdf-file" data-pr-tooltip="Fiche d'Inscription" data-pr-position="right"/></a></p>
                                    </div>
                                    <div className="p-col-6">
                                        <img src={SectionImage} width={"80%"} className="img-fluid z-depth-1-half" alt="People"/>
                                    </div>
                                    <div className="p-col-6">
                                        <div id="map-container" className="z-depth-1-half map-container mb-5">
                                            <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} />
                                        </div>
                                    </div>
                                    <div className="p-col-6 text-center">
                                        <div className={"p-mb-5"}><span className="bold-text">Salle des Maréchaux<br/>
                                        5, Résidence Les Maréchaux<br/>
                                        78700 Conflans Ste Honorine<br/>
                                            (Près du marché de Chennevières)</span></div>

                                        <div><a href="mailto:contact@au-confluent-des-jeux.fr">Contacter l'association</a></div>
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

export default ContactPage;
