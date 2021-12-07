import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import SectionImage from "../assets/img/imgContacts.jpg";
import {GMap} from "primereact/gmap";

const options = {
    center: {lat: 49.005167, lng: 2.113702},
    zoom: 10
};

const overlays = [
    new google.maps.Marker({position: {lat: 49.005167, lng: 2.113702}, title:"Salle des Maréchaux"})
];

const ContactPage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '5rem' }}>
                    <h2 className="text-center mb-3">Contact</h2>
                    <section>
                        <div className="p-grid">
                            <div className="p-col-6">
                                <p>Si vous êtes intéressé(e) pour découvrir notre activité, vous pouvez vous joindre
                                    à nous lors de n'importe quelle séance, notre porte vous est grande ouverte.</p>
                                <p>Nous nous réunissons tous les 15 jours en alternance sur les vendredis ou samedis
                                    soir, de 19h30 à 23h30 (officiellement ;-) )
                                    dans la salle municipale des Maréchaux. Cf. adresse ci-dessous.</p>
                                <p>L'adhésion est de 15 euros pour une saison (année scolaire) ;
                                    Prix de groupe famille et couple : +5 € au dela de la première personne ! (nous
                                    nous arrangerons bien sûr si vous nous rejoignez en cours d'année)</p>
                            </div>
                            <div className="p-col-6">
                                <img src={SectionImage} width={"80%"} className="img-fluid z-depth-1-half" alt=""/>
                            </div>
                        </div>
                        <div className="p-grid">
                            <div className="p-col-6">
                                <div id="map-container" className="z-depth-1-half map-container mb-5">
                                    <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} />
                                </div>
                            </div>
                            <div className="p-col-6">
                                Salle des Maréchaux<br/>
                                5, Résidence Les Maréchaux<br/>
                                78700 Conflans Ste Honorine<br/>
                                (Près du marché de Chennevières)
                            </div>
                        </div>
                    </section>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default ContactPage;
