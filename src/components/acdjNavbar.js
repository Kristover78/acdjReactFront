import React, {Component} from "react";
import {Menubar} from "primereact/menubar";
import {withRouter} from 'react-router-dom';

export class ACDJNavbar extends Component {
  constructor(props) {
    super(props);
  }

  navigateToPage = (path) => {
     this.props.history.push(path);
  }

  render() {
    const menuItems = [
      {
        label: <span style={{fontSize: 26}}><strong>aCd<span style={{color: 'orange'}}>J</span></strong></span>,
        className: 'p-offset-2 home-title',
        command: () => {this.navigateToPage('/')}
      },
      {
        label: 'Info',
        icon: 'pi pi-info-circle',
        command: () => {this.navigateToPage('/info')}
      },
      {
        label: 'Seances',
        icon: 'pi pi-calendar',
        command: () => {this.navigateToPage('/seances')}
      },
      {
        label: 'Ludotheque',
        icon: 'pi pi-heart',
        command: () => {this.navigateToPage('/ludotheque')}
      },
      {
        label: 'Forum',
        icon: 'pi pi-discord',
        command: () => {this.navigateToPage('/forum')}
      },
      {
        label: 'Contact',
        icon: 'pi pi-globe',
        command: () => {this.navigateToPage('/contact')}
      }
    ]

    return <Menubar model={menuItems} />;
  }
}

const ACDJNavbarWithRouter = withRouter(ACDJNavbar);
export default ACDJNavbarWithRouter;
