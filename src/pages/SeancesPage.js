import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import {MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import seancesData from "../services/Api/seancesData";

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
                            <p><MDBIcon icon="exclamation-triangle" className={"red-text"} /><strong>Dates non encore validées</strong> par la Mairie de Conflans.</p>
                            <MDBTable responsive>
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
