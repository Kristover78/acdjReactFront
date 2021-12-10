import React, {Component} from "react";
import Parser from "html-react-parser";
import {Rating} from "primereact/rating";
import YedoTmp from "../../assets/img/games/yedo.jpg";
import "./style.css";
import {Tooltip} from "primereact/tooltip";

class GameListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="p-d-flex game-container">
                    <Tooltip target=".tooltips" mouseTrack mouseTrackLeft={10} />
                    <div className="p-d-flex img-container"><img src={YedoTmp} className="p-as-center p-shadow-4 img-list" alt={this.props.game.title}/></div>
                    <div className="flex-grow-1 p-grid p-dir-col content-list p-mx-3">
                        <div><h3>{this.props.game.title}</h3></div>
                        <div className="game-text">{Parser(this.props.game.description)}</div>
                        <div className="p-d-flex p-jc-around"><span>{this.props.game.nbplayers} joueurs</span><Rating value={this.props.game.rating} readOnly cancel={false} /></div>
                    </div>
                    <div className="p-d-flex p-flex-column p-jc-between">
                        {this.props.game.public && <div><i className="fas fa-hand-holding fa-2x green-text tooltips" data-pr-tooltip="Peut être emprunté par les adhérent(e)s" data-pr-position="left"/></div>}
                        {this.props.game.rules && <div><a href={this.props.game.rules} target="_blank" rel="noreferrer"><i className="fas fa-book-reader fa-2x tooltips" data-pr-tooltip="Rêgles du jeu pour ceux et celles qui aiment lire" data-pr-position="left" /></a></div>}
                        {this.props.game.video && <div><a href={this.props.game.video} target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-2x tooltips" data-pr-tooltip="Vidéo de présentation" data-pr-position="left" /></a></div>}
                    </div>
                </div>);
    }
}

export default GameListItem;
