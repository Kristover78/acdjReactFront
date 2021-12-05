import React from 'react';
import {MDBAnimation, MDBContainer, MDBMask, MDBView} from 'mdbreact';
import HomePageSection1 from './HomePageSection1';
import HomePageSection2 from "./HomePageSection2";
import HomePageSection3 from "./HomePageSection3";
import HomePageSection4 from "./HomePageSection4";
import ACDJNavbar from "../../components/ACDJNavbar";
import ACDJFooter from "../../components/ACDJFooter";
import WelcomeImage from '../../assets/img/20170106_213000.jpg';
import './style.css';

const HomePage = () => {
    return (
        <div>
          <header>
            <ACDJNavbar homepage={true} />
          </header>
          <main>
            <div className='flyout'>
              <MDBView  src={WelcomeImage}>
                <MDBMask
                    overlay="black-light"
                    className="flex-center flex-column text-white text-center">
                  <MDBContainer>
                    <div className="row wow fadeIn">
                      <div className="col-md-6 mb-4 white-text text-md-left">
                          <MDBAnimation type="bounce">
                              <h1 className="display-4">association
                              <div className="font-weight-bold acdj-home-title">au Confluent des{' '}
                                  <span>J</span>eux</div>
                              </h1>
                          </MDBAnimation>
                        <hr className="hr-light"/>
                        <p className="mb-3">
                          <strong>
                            Jeux de société, de figurine, de carte, tournois,...
                          </strong>
                        </p>
                        <p className="d-none d-md-block">
                          <strong>
                            Nous rejoindre si vous habitez aux alentours de Conflans
                            Ste Honorine (78700), c'est pouvoir ressortir vos
                            vieilles boites de l'armoire, car nous seront là pour
                            les tester :-)
                          </strong>
                        </p>
                      </div>
                    </div>
                  </MDBContainer>
                </MDBMask>
              </MDBView>

              <MDBContainer className="my-5">
                  <h4 className="h4 text-center mb-5">
                    Si vous êtes aux alentours de Conflans Ste Honorine, et que vous
                    voulez...
                  </h4>
                  <HomePageSection1/>
                  <hr className="my-5"/>
                  <HomePageSection2/>
                  <hr className="my-5"/>
                  <HomePageSection3/>
                  <hr className="my-5"/>
                  <HomePageSection4/>
              </MDBContainer>
            </div>
          </main>
          <footer>
            <ACDJFooter/>
          </footer>
        </div>
    );
}

export default HomePage;
