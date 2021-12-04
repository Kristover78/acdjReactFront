import React, {Component, useState} from "react";
import {Menubar} from "primereact/menubar";
import {useLocation, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {showGrowl} from "../../services/redux/actions";
//import 'primereact/resources/themes/cupertino/theme.css';
import './style.css';

export class ACDJNavbar extends Component {

  navigateToPage = (path) => {
    console.log('Navigate to path ' + path);
    this.props.history.push(path);
  }

  render() {
    const menuItems = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => {this.navigateToPage('/')}
      },
      {
        label: 'Info',
        icon: 'pi pi-info-circle',
        command: () => {this.navigateToPage('/info')}
      },
      {
        label: 'seances',
        icon: 'pi pi-info-circle',
        command: () => {this.navigateToPage('/seances')}
      },
      {
        label: 'ludotheque',
        icon: 'pi pi-list',
        command: () => {this.navigateToPage('/ludotheque')}
      },
      {
        label: 'forum',
        icon: 'pi pi-discord',
        command: () => {this.navigateToPage('/forum')}
      },
      {
        label: 'contact',
        icon: 'pi pi-globe',
        command: () => {this.navigateToPage('/contact')}
      }
    ]

    return <Menubar model={menuItems} start={<span><strong>aCd<span style={{color: 'orange'}}>J</span></strong></span>} />;
  }
}

const mapDispatchToProps = {
  showGrowl
};

ACDJNavbar = withRouter(connect(null, mapDispatchToProps)(ACDJNavbar))

export default ACDJNavbar;
