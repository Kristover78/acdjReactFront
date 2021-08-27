import React from "react";
import {MDBCard, MDBCardBody, MDBCol, MDBMask, MDBRow, MDBView} from "mdbreact";
import DefaultArticleImage from "../../../assets/img/infoDefault.jpg";
import Parser from "html-react-parser";
import "./style.css";

class Article extends React.Component {

     getImage(imageName){
        if (imageName === ''){
            return DefaultArticleImage;
        }
        const images = require.context('../../../assets/img/info', true);
        let img = images('./' + imageName);
        return img;
    }

    render() {
        return (
            <article className="wow fadeIn">
                <MDBCard style={{marginBottom: 15}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg={"5"} xl={"4"}>
                                <MDBView hover className={"img-fluid rounded z-depth-1-half mb-lg-0 mb-4"} >
                                    <img className="img-fluid" src={this.getImage(this.props.img)}
                                         alt="article"/>
                                    <MDBMask overlay={"white-slight"} waves />
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg={"7"} xl={"8"}>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>{this.props.title}</strong>
                                </h3>
                                <p className="dark-grey-text">{Parser(this.props.content)}</p>
                                <p><span style={{ whiteSpace: 'nowrap' }}>par <span className="font-weight-bold">{this.props.author}</span>, {this.props.date}</span></p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </article>
        )
    }
}

export default Article;
