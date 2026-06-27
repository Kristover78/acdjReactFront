import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import ACDJNavbar from "../components/acdjNavbar";
import ACDJFooter from "../components/acdjFooter";
import {getSeancesList} from "../services/Api";
import moment from "moment";

class SeancesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seances: [],
            dataisLoaded: false,
            selectedSeance: null
        };
    }

    componentDidMount() {
        const seances = getSeancesList();
        this.setState({
            seances: seances,
            dataisLoaded: true,
            selectedSeance: seances.data[seances.current]
        });
    }

    dateTemplate(rowData) {
        return moment(rowData['date']).format("DD/MM/YYYY HH:mm");
    }

    rowClassName = (rowData) => {
        const status = rowData['status'];
        if (status === "Terminée" ) {
            return {'row-disabled' : true};
        }
        return "";
    }

  render() {
      const { dataisLoaded, seances } = this.state;
      if (!dataisLoaded)
          return (<div><h1>Veuillez patienter, chargement... </h1> </div>);
      return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '4rem' }}>
                <div className="p-grid">
                    <div className="p-col-12 p-sm-offset-1 p-sm-10 p-md-offset-2 p-md-8 p-lg-offset-3 p-lg-6">
                        <h2 className="text-center mb-3">Calendrier des séances de jeu</h2>
                        <p>Calendrier pour la saison 2025-2026.</p>
                        <DataTable value={seances.data} selectionMode="single" selection={this.state.selectedSeance} dataKey="id" responsiveLayout="scroll" rowClassName={this.rowClassName}>
                            <Column field="seance" header="Séance" />
                            <Column field="date" header="Date" body={this.dateTemplate} />
                            <Column field="status" header="Statut" />
                        </DataTable>
                    </div>
                </div>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
  }
}

export default SeancesPage;
