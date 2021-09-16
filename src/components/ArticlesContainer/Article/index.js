import React from "react";
import {MDBCard, MDBCardBody, MDBCol, MDBRow, MDBView} from "mdbreact";
import DefaultArticleImage from "../../../assets/img/infoDefault.jpg";
import Parser from "html-react-parser";
import "./style.css";
import LightBox from "../../LightBox";



class Article extends React.Component {

     getImages(imageNames){
        if (imageNames === ''){
            return [DefaultArticleImage];
        }
        let imageNameArray = imageNames.split(',');
        const imagePath = require.context('../../../assets/img/info', true);
        let imagesResult = [];
        for(var i = 0; i < imageNameArray.length; i++){
            let img = imagePath('./' + imageNameArray[i]);
             imagesResult.push(img);
        }
        return imagesResult;
    }

    render() {
        return (
            <article className="wow fadeIn">
                <MDBCard style={{marginBottom: 15}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg={"5"} xl={"4"}>
                                <MDBView hover className={"img-fluid rounded z-depth-1-half mb-lg-0 mb-4"} >
                                    <LightBox images={this.getImages(this.props.img)}/>
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
