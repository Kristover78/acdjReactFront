import React from "react";
import ACDJNavbar from "../components/acdjNavbar";
import ACDJFooter from "../components/acdjFooter";
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
                    <div className="p-col-12 p-sm-offset-1 p-sm-10 p-md-offset-2 p-md-8 p-lg-offset-3 p-lg-6">
                        <h2 className="text-center mb-3">Infos</h2>
                        <DataView value={articles} layout={"list"} itemTemplate={itemTemplate} paginator rows={5} />
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
