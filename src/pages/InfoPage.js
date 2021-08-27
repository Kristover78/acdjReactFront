import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import articlesdata from "../components/ArticlesContainer/articledata";
import Article from "../components/ArticlesContainer/Article";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class InfoPage extends React.Component {
  render() {
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
                                articlesdata.map((article) =>
                                    <Article title={article.title}
                                             content={article.body}
                                             author={article.author}
                                             date={article.date}
                                             img={article.img_path}/>
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
