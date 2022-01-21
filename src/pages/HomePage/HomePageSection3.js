import React from "react";
import SectionImage from '../../assets/img/20191109_000556.jpg';

const HomePageSection3 = () => {
    return (
        <section>
            <div className="p-col-12 p-md-6">
                <img src={SectionImage} className="p-shadow-4" alt="Aventure"/>
            </div>
            <div className="p-col-12 p-md-6">
                <h3 className="text-center h3 mb-3">Avoir des frissons !</h3>
                <p>Partir à l&apos;<strong>aventure ludique</strong>, c&apos;est savoir prendre des risques et choisir le
                    bon chemin pour atteindre ses objectifs.</p>
                <p>Découvrir de nouveaux terrains de jeu, n&apos;est-ce pas excitant ?!</p>
            </div>
        </section>
    )
}

export default HomePageSection3;
