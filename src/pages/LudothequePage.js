import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import './seancesPage.css';
import {getLudothequeData} from "../services/Api";

class SeancesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            dataIsLoaded: false
        };
    }

    componentDidMount() {
        const data = getLudothequeData();
        data.map((item) => {
            item.image = (
                <img
                    src={item.image}
                    alt="image"
                    className="someImgClass"
                />
            )
        })
        this.setState({
            games: data,
            dataIsLoaded: true
        });
    }

  render() {
      const { dataIsLoaded, games } = this.state;
      if (!dataIsLoaded) return <div>
          <h1>Veuillez patienter, chargement... </h1> </div> ;
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '5rem' }}>
                <section>
                    <div className="p-grid">
                        <div className="p-col-10">
                            <h2>Ludothèque</h2>
                            <p>Vous voulez faire une soirée entre ami mais vous voulez tester de nouvelles choses ?!</p>
                            <p>En tant qu'adhérent(e) voici quelques jeux que vous pourriez emprunter à la ludothèque de l'asssociation.</p>
                            <p>Et sinon, si quelque chose vous intéresse en particulier, nous pouvons toujours sortir la boite en séance :-)</p>
                            {/*<MDBTable responsive striped bordered hover className={"testtable"}>
                                <MDBTableHead columns={games.columns} />
                                <MDBTableBody rows={games.rows} />
                            </MDBTable>*/}
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
  }
}

export default SeancesPage;
