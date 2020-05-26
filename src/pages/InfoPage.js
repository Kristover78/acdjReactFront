import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
} from 'mdbreact';
import Article from '../components/Article';
import articles from '../components/Article/ArticleData';

class InfoPage extends React.Component {
  render() {
    return (
        <MDBContainer className="my-5">
            <h4 className="h4 mb-5">Informations</h4>
            <MDBRow><MDBCol>
            <div className="d-flex flex-row" style={{flexWrap: "wrap"}}>
                {articles.map((article) =>
                    <Article title={article.title}
                             content={article.body}
                             img={article.img_path}/>
                )}
            </div>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
  }
}

export default InfoPage;
