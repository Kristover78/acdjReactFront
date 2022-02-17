import React from "react";
import {DataView} from "primereact/dataview";
import ACDJNavbar from "../../components/acdjNavbar";
import ACDJFooter from "../../components/acdjFooter";
import {getLudothequeData} from "../../services/Api";
import GameListItem from "./GameListItem";
import LudothequeImg from "../../assets/img/armoire_a_jeu.jpg"
import {Image} from "primereact/image";

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
                    <div className="p-col-12 p-sm-offset-1 p-sm-10 p-md-offset-2 p-md-8 p-lg-offset-3 p-lg-6">
                        <div className="p-grid">
                            <div className="p-col-3">
                                <Image src={LudothequeImg} className="img-armoire" preview/>
                            </div>
                            <div className="p-col-9">
                                <h2>Ludothèque</h2>
                                <p>Vous voulez faire une soirée entre ami mais vous voulez tester de nouvelles choses ?!</p>
                                <p>En tant qu&apos;adhérent(e) voici quelques jeux que vous pourriez emprunter à la ludothèque de l&apos;asssociation.</p>
                                <p>Et sinon, si quelque chose vous intéresse en particulier, nous pouvons toujours sortir la boite en séance :-)</p>
                            </div>
                            <div className="p-col-12">
                                <DataView value={games} layout={"grid"} itemTemplate={itemTemplate} />
                            </div>
                        </div>
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
