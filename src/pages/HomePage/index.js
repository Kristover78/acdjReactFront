import React from 'react';
import {Divider} from "primereact/divider";
import HomePageSection1 from './HomePageSection1';
import HomePageSection2 from "./HomePageSection2";
import HomePageSection3 from "./HomePageSection3";
import HomePageSection4 from "./HomePageSection4";
import ACDJNavbar from "../../components/ACDJNavbar";
import ACDJFooter from "../../components/ACDJFooter";
import './style.css';

const Index = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={true}/>
            </header>
            <main>
                <div className="landing-zone">
                    <div className="p-d-flex p-flex-column p-jc-center maincover">
                            <div className="p-col-5 p-offset-2">
                                <h1 className="white-text">association
                                    <div className="font-weight-bold acdj-home-title">au Confluent des{' '}
                                        <span>J</span>eux</div>
                                </h1>

                                <hr className="hr-light white-text"/>
                                <p className="mb-3 white-text">
                                    <strong>
                                        Jeux de société, de figurine, de carte, tournois,...
                                    </strong>
                                </p>
                                <p className="white-text">
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
                    <div className="p-col-8 p-offset-2">
                        <h4>
                            Si vous êtes aux alentours de Conflans Ste Honorine, et que vous
                            voulez...
                        </h4>
                    </div>
                </div>
                <div className="sections">
                    <HomePageSection1/>
                    <Divider />
                    <HomePageSection2/>
                    <Divider />
                    <HomePageSection3/>
                    <Divider />
                    <HomePageSection4/>
                </div>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default Index;
