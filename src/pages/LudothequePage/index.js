import React from "react";
import {DataView} from "primereact/dataview";
import ACDJNavbar from "../../components/ACDJNavbar";
import ACDJFooter from "../../components/ACDJFooter";
import {getLudothequeData} from "../../services/Api";
import GameListItem from "./GameListItem";
import LudothequeImg from "../../assets/img/armoire_a_jeu.jpg"
import {Image} from "primereact/image";
import "./style.css";

const itemTemplate = (item) => {
    return (
        <GameListItem game={item} />
    );
}

class LudothequePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            dataIsLoaded: false
        };
    }

    componentDidMount() {
        const games = getLudothequeData();
        this.setState({
            games: games.data,
            dataIsLoaded: true
        });
    }

  render() {
      const { dataIsLoaded, games } = this.state;
      if (!dataIsLoaded) return <div><h1>Veuillez patienter, chargement... </h1> </div> ;
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '4rem' }}>
                <div className="p-grid">
                    <div className="p-offset-2 p-col-1">
                        <div className="p-d-flex">
                            <div className="align-items-center justify-content-center"><Image src={LudothequeImg} className="img-armoire" preview/></div>
                        </div>
                    </div>
                    <div className="p-col-7">
                        <h2>Ludothèque</h2>
                        <p>Vous voulez faire une soirée entre ami mais vous voulez tester de nouvelles choses ?!</p>
                        <p>En tant qu&apos;adhérent(e) voici quelques jeux que vous pourriez emprunter à la ludothèque de l&apos;asssociation.</p>
                        <p>Et sinon, si quelque chose vous intéresse en particulier, nous pouvons toujours sortir la boite en séance :-)</p>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-offset-2 p-col-8">
                        <DataView value={games} layout={"grid"} itemTemplate={itemTemplate} />
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

export default LudothequePage;
