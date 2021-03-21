import React, {useState} from "react";
import {
  MDBBtn,
  MDBCollapse, MDBContainer,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { useLocation } from 'react-router-dom';
import './style.css';

const ACDJNavbar = (props) => {
  let [collapse, setCollapse] = useState(false);
  let [isWideEnough] = useState(false);
  let [modal, setModal] = useState(false);
  let [navbarClassname] = useState(props.homepage ? '' : 'normal-nav-bar');
  let location = useLocation();

  function isActive(url){
     return location.pathname === url;
  }

  function onClick() {
    setCollapse(!collapse);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <MDBNavbar
        fixed="top"
        dark
        expand="md"
        scrolling={props.homepage}
        transparent={props.homepage}
        className={navbarClassname}
      >
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <strong>
              aCd<span style={{ color: 'orange' }}>J</span>
            </strong>
          </MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={onClick} />
          )}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active={isActive('/')}>
                <MDBNavLink to="/">Accueil</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active={isActive('/info')}>
                <MDBNavLink to="/info">Info</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active={isActive('/forum')}>
                <MDBNavLink to="/forum">Forum</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active={isActive('/contact')}>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBBtn outline color="white" size="sm" onClick={toggleModal}>
                  Se connecter
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <MDBModal
        isOpen={modal}
        toggle={toggleModal}
        backdrop={false}
        size="sm"
        centered
      >
        <MDBModalHeader toggle={toggleModal}>Connexion</MDBModalHeader>
        <MDBModalBody>
          <form>
            <div className="grey-text">
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Mot de passe"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
          </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="default" onClick={toggleModal}>
            Annuler
          </MDBBtn>
          <MDBBtn color="primary">Login</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
}

export default ACDJNavbar;