import React from 'react';
import {
    MDBContainer,
    MDBMask,
    MDBView,
} from 'mdbreact';
import WelcomeImage from '../assets/img/20170106_213000.jpg';
import HomePageSection1 from '../components/HomePageSection1';
import HomePageSection2 from '../components/HomePageSection2';
import HomePageSection3 from "../components/HomePageSection3";
import HomePageSection4 from "../components/HomePageSection4";
import ACDJFooter from "../components/ACDJFooter";
import ACDJNavbar from "../components/ACDJNavbar";

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <ACDJNavbar />

                    <MDBView src={WelcomeImage}>
                        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                            <MDBContainer>
                                <div className="row wow fadeIn">
                                    <div className="col-md-6 mb-4 white-text text-center text-md-left">
                                        <h1 className="display-4 font-weight-bold">Association au Confluent des <span style={{color:"orange"}}>J</span>eux</h1>
                                        <hr className="hr-light" />
                                        <p>
                                            <strong>Jeux de société, de figurine, de carte, tournois,...</strong>
                                        </p>
                                        <p className="mb-4 d-none d-md-block">
                                            <strong>Nous rejoindre si vous habitez aux alentours de Conflans Ste Honorine
                                                (78700), c'est pouvoir ressortir vos vieilles boites de l'armoire, car nous
                                                seront là pour les tester :-)</strong>
                                        </p>
                                    </div>
                                </div>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <h4 className="h4 text-center mb-5">Vous êtes aux alentours de Conflans Ste Honorine ! Si vous
                            voulez...</h4>
                        <HomePageSection1 />
                        <hr className="my-5" />
                        <HomePageSection2 />
                        <hr className="my-5" />
                        <HomePageSection3 />
                        <hr className="my-5" />
                        <HomePageSection4 />
                    </MDBContainer>
                </main>

                <footer>
                    <ACDJFooter />
                </footer>
            </div>
        );
    }
}

export default HomePage;