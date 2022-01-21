import React from 'react';
import {Divider} from "primereact/divider";
import HomePageSection1 from './HomePageSection1';
import HomePageSection2 from "./HomePageSection2";
import HomePageSection3 from "./HomePageSection3";
import HomePageSection4 from "./HomePageSection4";
import ACDJNavbar from "../../components/acdjNavbar";
import ACDJFooter from "../../components/acdjFooter";

const Index = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={true}/>
            </header>
            <main>
                <div className="landing-zone">
                    <div className="p-d-flex p-flex-column p-jc-center maincover">
                            <div className="p-xl-offset-2 p-xl-col-5 p-md-offset-1 p-sm-11 p-sm-offset-0 p-sm-12">
                                <h1 className="acdj-home-title">association au Confluent des{' '}
                                        <span className=".j-color">J</span>eux
                                </h1>
                                <hr className="hr-light white-text"/>
                                <p className="mb-3 white-text acdj-description">
                                    <strong>
                                        Jeux de société, de figurine, de carte, tournois,...
                                    </strong>
                                </p>
                                <p className="white-text acdj-description">
                                    <strong>
                                        Nous rejoindre si vous habitez aux alentours de Conflans
                                        Ste Honorine (78700), c&apos;est pouvoir ressortir vos
                                        vieilles boites de l'armoire, car nous seront là pour
                                        les tester :-)
                                    </strong>
                                </p>
                            </div>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-xl-offset-2 p-xl-col-5 p-md-offset-1 p-sm-11 p-sm-offset-0 p-sm-12">
                        <h4>
                            Si vous êtes aux alentours de Conflans Ste Honorine, et que vous
                            voulez...
                        </h4>
                    </div>
                </div>
                <div className="sections">
                    <div className="p-grid">
                            <HomePageSection1/>
                            <Divider />
                            <HomePageSection2/>
                            <Divider />
                            <HomePageSection3/>
                            <Divider />
                            <HomePageSection4/>
                    </div>
                </div>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default Index;
