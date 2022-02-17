import React from "react";
import SectionImage from '../../assets/img/20170618_002153.jpg';
import {Image} from "primereact/image";

const HomePageSection4 = () => {
    return (
        <section>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <h3 className="text-center h3 mb-3">Participer à des tournois</h3>
                    <p>Tout au long de l'année nous essayons d&apos;organiser des compétitions (7 Wonders, Blood Bowl,
                        Netrunner, etc...).</p>
                    <p>L&apos;idée est de mettre en place une ligue permettant un classement avec, pourquoi pas, titre et
                        prix à la clef.</p>
                </div>
                <div className="p-col-12 p-md-6">
                    <Image src={SectionImage} preview={true} width="90%" alt="Tournois" />
                </div>
            </div>
        </section>
    )
}

export default HomePageSection4;
