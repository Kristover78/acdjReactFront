import React, {Component} from "react";
import {Menubar} from "primereact/menubar";
import {withRouter} from 'react-router-dom';
import './style.css';

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
        label: <span style={{fontSize: 22}}><strong>aCd<span style={{color: 'orange'}}>J</span></strong></span>,
        className: 'p-offset-2',
        command: () => {this.navigateToPage('/')}
      },
      {
        label: 'Info',
        icon: 'pi pi-info-circle',
        command: () => {this.navigateToPage('/info')}
      },
      {
        label: 'seances',
        icon: 'pi pi-calendar',
        command: () => {this.navigateToPage('/seances')}
      },
      {
        label: 'ludotheque',
        icon: 'pi pi-heart',
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

    return <Menubar model={menuItems} />;
  }
}

const ACDJNavbarWithRouter = withRouter(ACDJNavbar);
export default ACDJNavbarWithRouter;
