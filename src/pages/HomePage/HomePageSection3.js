import React from "react";
import SectionImage from '../../assets/img/20191109_000556.jpg';
import {Image} from "primereact/image";

const HomePageSection3 = () => {
    return (
        <section>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <Image src={SectionImage} preview={true} width="90%" alt="Aventure"/>
                </div>
                <div className="p-col-12 p-md-6">
                    <h3 className="text-center h3 mb-3">Avoir des frissons !</h3>
                    <p>Partir à l&apos;<strong>aventure ludique</strong>, c&apos;est savoir prendre des risques et choisir le
                        bon chemin pour atteindre ses objectifs.</p>
                    <p>Découvrir de nouveaux terrains de jeu, n&apos;est-ce pas excitant ?!</p>
                </div>
            </div>
        </section>
    )
}

export default HomePageSection3;
