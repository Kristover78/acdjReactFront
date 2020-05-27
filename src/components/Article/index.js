import React from "react";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon} from "mdbreact";
import DefaultArticleImage from "../../assets/img/infoDefault.jpg";
import Parser from "html-react-parser";
import "./style.css";

class App extends React.Component {
    render() {
        return <article className="mt-5 wow fadeIn">
            <MDBCard style={{width: "360px", height: "565px"}} className="mx-1">
                <MDBCardImage src={DefaultArticleImage} waves/>
                <MDBCardBody>
                    <MDBCardTitle>{this.props.title}</MDBCardTitle>
                    <hr/>
                    <MDBCardText>
                        {Parser(this.props.content)}
                        <a href="#" className="float">
                            <i className="fa fa-angle-right fa-2x my-float" />
                        </a>
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="text-center" small>
                    <div className='pt-3'>
                        <ul className='list-unstyled list-inline '>
                            <li className='list-inline-item pr-2 white-text'>
                                <MDBIcon far icon='user' /> Christophe Nigaud
                            </li>
                            <li className='list-inline-item pr-2 white-text'>
                                <MDBIcon far icon='clock' /> 05/10/2015
                            </li>
                            <li className='list-inline-item pr-2 white-text'>
                                <MDBIcon far icon='comments' className='mr-1' /> 12
                            </li>
                        </ul>
                    </div>
                </MDBCardFooter>
            </MDBCard>
        </article>;
    }
}

export default App;