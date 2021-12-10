import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import Article from "../components/Article";
import {getNewsData} from "../services/Api";
import {DataView} from "primereact/dataview";

const itemTemplate = (article) => {
    return (
        <Article title={article.title}
                 content={article.body}
                 author={article.author}
                 date={article.date}
                 imgnames={article.img_name}
                 imgpath={article.img_path}/>
    );
}

class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            dataisLoaded: false
        };
    }

    componentDidMount() {
        const data = getNewsData();
        this.setState({
            articles: data,
            dataisLoaded: true
        });
    }

  render() {
      const { dataisLoaded, articles } = this.state;
      if (!dataisLoaded) return <div><h1>Veuillez patienter, chargement... </h1> </div> ;
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '4rem' }}>
                <div className="p-grid">
                    <div className="p-col-6 p-offset-3">
                        <DataView value={articles} layout={"list"} itemTemplate={itemTemplate} />
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

export default InfoPage;
