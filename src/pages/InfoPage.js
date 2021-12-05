import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import Article from "../components/Article";
import {getNewsData} from "../services/Api";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

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
      if (!dataisLoaded) return <div>
          <h1>Veuillez patienter, chargement... </h1> </div> ;
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '5rem' }}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size={10}>
                            <div className="d-flex flex-column">
                                {
                                articles.map((article) =>
                                    <Article title={article.title}
                                             content={article.body}
                                             author={article.author}
                                             date={article.date}
                                             path={article.img_path}
                                             img={article.img_name}/>
                                    )}
                            </div>
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

export default InfoPage;
