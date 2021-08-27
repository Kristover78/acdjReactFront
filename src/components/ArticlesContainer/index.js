import React from "react";
import Article from "./Article";
import articlesdata from "./articledata";
import {MDBCard, MDBCardBody} from "mdbreact";

class InfosContainer extends React.Component {
    render() {
        return (
            articlesdata.map((article) =>
            <MDBCard>
                <MDBCardBody>
                    <Article title={article.title}
                             content={article.body}
                             author={article.author}
                             date={article.date}
                             img={article.img_path}/>

                </MDBCardBody>
            </MDBCard>
                )
        )
    }
}

export default InfosContainer;
