import React, {Component} from "react";
import Parser from "html-react-parser";
import LightBox from "../LightBox";
import DefaultArticleImage from "../../assets/img/infoDefault.jpg";
import "./style.css";

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 0
        };
    }

    getImages(imageRootPath, imageNames){
        if (imageNames === ''){
            return [DefaultArticleImage];
        }
        const imagePath = require.context('../../assets/img/info', true);
        let imageNameArray = imageNames.split(',');
        let imagesResult = [];
        for(var i = 0; i < imageNameArray.length; i++){
            let img = imagePath('./' + imageRootPath + imageNameArray[i]);
            imagesResult.push(img);
        }
        return imagesResult;
    }

    render() {
        return (
            <article>
                <div className="p-shadow-5 p-mt-5">
                    <div className={"p-grid"}>
                        <div className="p-col-4">
                            {/*LightBox images={this.getImages(this.props.imgpath, this.props.imgnames)}/>*/}
                            <img src={this.getImages(this.props.imgpath, this.props.imgnames)[0]} alt="article" />
                        </div>
                        <div className="p-col-8">
                            <h4>{this.props.title}</h4>
                            <div className="p-mr-4">{Parser(this.props.content)}</div>
                            <p><span style={{ whiteSpace: 'nowrap' }}>par <span className="font-weight-bold">{this.props.author}</span>, {this.props.date}</span></p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article;
