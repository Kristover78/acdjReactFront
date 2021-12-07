import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import {getSeancesList} from "../services/Api";
import './seancesPage.css';

class SeancesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seances: [],
            dataisLoaded: false,
            selectedSeanceId: null
        };
    }

    componentDidMount() {
        const seances = getSeancesList();
        for (let item in seances.data) {
            if (item.next){
                this.setState({selectedSeanceId: item.id});
                break;
            }
        }
        this.setState({
            seances: seances,
            dataisLoaded: true
        });
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
            <main style={{ marginTop: '2rem' }}>
                <div className="p-grid">
                    <div className="p-col-7 p-offset-2">
                            <h2>Calendrier des séances de jeu</h2>
                            <p>Calendrier pour la saison 2021-2022.</p>
                        <DataTable value={seances.data} selectionMode="single" selection={this.state.selectedSeanceId} dataKey="id">
                            <Column field="seance" header="Séance" />
                            <Column field="date" header="Date" />
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
