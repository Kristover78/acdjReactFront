import React from "react";
import SectionImage from '../../assets/img/20191206_211356.jpg';
import {Image} from "primereact/image";

const HomePageSection2 = () => {
    return (
        <section>
            <div className="p-grid">
                <div className="p-col-12 p-md-8">
                    <h2>Découvrir de nouvelles pépites ludiques</h2>
                    <ul className="fa-ul">
                        <li><i className="fa-li fas fa-star fa-2x pink-text ulawesome"></i><strong>Avant première:</strong> Nous essayons d&apos;organiser des <strong>séances
                            découvertes</strong> avec des jeux pas encore sorti dans le commerce. Des prototypes
                            ou alors des exclusivités souvent sorti du monde Kickstarter.</li>
                        <li><i className="fa-li fas fa-search fa-2x cyan-text ulawesome"></i><strong>Tests avant achat:</strong> Si vous avez l&apos;intention d'acheter un jeu pour vous mais vous
                            n&apos;êtes pas sûr de votre choix,
                            alors rien de mieux que de venir le <strong>tester</strong> en association.</li>
                        <li><i className="fa-li fas fa-hand-holding fa-2x green-text ulawesome"></i><strong>Prêt de jeu:</strong> Nous essayons de constituer
                            une <strong>ludothèque</strong> avec certains titres phares. En tant qu'adhérent,
                            les jeux peuvent être <strong>emprunté gratuitement</strong> pour pouvoir être joué
                            tranquillement chez soi avec ses amis.</li>
                    </ul>
                </div>
                <div className="p-col-12 p-md-4">
                    <Image src={SectionImage} preview={true} width="90%" alt="Nouveaux jeux" />
                </div>
            </div>
        </section>
    )
}

export default HomePageSection2;
