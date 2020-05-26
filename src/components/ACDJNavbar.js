import React from "react";
import {
    MDBBtn,
    MDBCollapse,
    MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

class ACDJNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
        };
        this.onClick = this.onClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render (){
        return (
            <div>
                <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
                    <div className="container">
                        <MDBNavbarBrand href="/">
                            <strong>ACD<span style={{color:"orange"}}>J</span></strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="#">Accueil</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#">Contacts</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#">News</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon fab icon="twitter" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon fab icon="facebook" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBBtn outline color="white" onClick={this.toggleModal}>Se connecter</MDBBtn>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </div>
                </MDBNavbar>

                <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} backdrop={false} size="sm" centered>
                    <MDBModalHeader toggle={this.toggleModal}>Connexion</MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <div className="grey-text">
                                <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Mot de passe" icon="lock" group type="password" validate />
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="default" onClick={this.toggleModal}>Annuler</MDBBtn>
                        <MDBBtn color="primary">Login</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        )
    }
}

export default ACDJNavbar;