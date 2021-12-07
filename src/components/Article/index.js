import React, {Component} from "react";
import Parser from "html-react-parser";
import {Card} from "primereact/card";
import {Galleria} from "primereact/galleria";
import DefaultArticleImage from "../../assets/img/infoDefault.jpg";
import "./style.css";
import {Image} from "primereact/image";

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 0
        };

        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    getImages(imageRootPath, imageNames){
        return [DefaultArticleImage];
        /*if (imageNames === ''){
            return [DefaultArticleImage];
        }
        const imagePath = require.context('/assets/img/info/', true);
        let imageNameArray = imageNames.split(',');

        let imagesResult = [];
        for(var i = 0; i < imageNameArray.length; i++){
            let img = imagePath('./' + imageRootPath+ imageNameArray[i]);
            imagesResult.push(img);
        }
        return imagesResult;*/
    }

    itemTemplate(item) {
        return <img src={item} alt={item} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item} alt={item} style={{ width: '100%', display: 'block' }} />;
    }



    render() {
        return (
            <article>
                <div className="p-shadow-5 p-mt-5">
                    <div className={"p-grid"}>
                        <div className="p-col-4">
                            <Image src={DefaultArticleImage} preview className="infoImg" alt="info"/>
                        </div>
                        <div className="p-col-8">
                            <h4>{this.props.title}</h4>
                            <p className="p-mr-4">{Parser(this.props.content)}</p>
                            <p><span style={{ whiteSpace: 'nowrap' }}>par <span className="font-weight-bold">{this.props.author}</span>, {this.props.date}</span></p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article;
