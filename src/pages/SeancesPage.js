import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import {MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import './seancesPage.css';
import {getSeancesList} from "../services/Api";

class SeancesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seances: [],
            dataisLoaded: false
        };
    }

    componentDidMount() {
        const data = getSeancesList();
        this.setState({
            seances: data,
            dataisLoaded: true
        });
    }

  render() {
      const { dataisLoaded, seances } = this.state;
      if (!dataisLoaded) return <div>
          <h1>Veuillez patienter, chargement... </h1> </div> ;
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '5rem' }}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size={10}>
                            <h2>Calendrier des séances de jeu</h2>
                            <p>Calendrier pour la saison 2021-2022.</p>
                            <MDBTable responsive striped className={"testtable"}>
                                <MDBTableHead columns={seances.columns} />
                                <MDBTableBody rows={seances.rows} />
                            </MDBTable>
                        </MDBCol></MDBRow>
                </MDBContainer>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
  }
}

export default SeancesPage;
