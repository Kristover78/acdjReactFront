import React from "react";
import {
    MDBContainer,
} from 'mdbreact';
import Article from '../components/Article';
import articles from '../components/Article/ArticleData';
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";

class InfoPage extends React.Component {
  render() {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false} />
            </header>
            <main style={{ marginTop: '5rem' }}>
                <MDBContainer>
                    <h2 className="text-center mb-3">Informations</h2>
                    <div className="d-flex flex-row justify-content-between" style={{flexWrap: "wrap"}}>
                        {articles.map((article) =>
                            <Article title={article.title}
                                     content={article.body}
                                     img={article.img_path}/>
                        )}
                    </div>
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
