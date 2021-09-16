import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import {MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import seancesData from "../services/Api/seancesData";
import './seancesPage.css';

class SeancesPage extends React.Component {
  render() {
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
                                <MDBTableHead columns={seancesData.columns} />
                                <MDBTableBody rows={seancesData.rows} />
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
