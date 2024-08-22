import React, {Component} from "react";
import Parser from "html-react-parser";
import DefaultArticleImage from "../../assets/img/infoDefault.jpg";
import {CSSTransition} from "primereact/csstransition";
import {Galleria} from "primereact/galleria";
import {Dialog} from "primereact/dialog";

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 0,
            showGalleria: false,
            showImage: true,
            dataIsLoaded: false
        };
    }

    componentDidMount() {
        this.setState({images: this.getImages(this.props.imgpath, this.props.imgnames),
                dataIsLoaded: true});
    }

    getImages(imageRootPath, imageNames){
        if (imageNames === ''){
            return [DefaultArticleImage];
        }
        const imagePath = require.context('../../assets/img/info/', true);
        let imageNameArray = imageNames.split(',');
        let imagesResult = [];
        for(var i = 0; i < imageNameArray.length; i++){
            let img = imagePath('./' + imageRootPath + imageNameArray[i]);
            imagesResult.push(img);
        }
        return imagesResult;
    }

    itemTemplate(item) {
        return <img src={item.default} alt="Info" style={{ width: '100%' }} />
    }

    thumbnailTemplate(item) {
        return <img src={item.default} alt="Info" style={{ display: 'block' }} />;
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    render() {
        const { dataIsLoaded, images } = this.state;
            if (!dataIsLoaded) return <div><h1>Veuillez patienter, chargement... </h1> </div> ;
        return (
            <article>
                <div className="p-shadow-5 p-mt-5">
                    <div className="p-grid">
                        <div className="p-sm-12 p-md-4">
                            <div className="p-d-flex" style={{height: '100%'}}>
                            { this.state.showImage &&
                            <div className="p-as-center"><img src={images[0].default} onClick={() => this.setState({showGalleria:true})} alt="info" className="infoImg p-shadow-4"/></div>
                            }
                            <CSSTransition
                                in={this.state.showGalleria}
                                timeout={300}
                                classNames="dialog"
                                unmountOnExit
                                onEnter={()=> this.setState({showImage: false})}
                                onExited={() => this.setState({showImage: true})}
                            >
                                <Dialog header={this.props.title} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}}
                                        onHide={() => this.setState({showGalleria: false})} visible={this.state.showGalleria} dismissableMask={true} maximizable={true}>
                                    <Galleria value={images} item={this.itemTemplate} showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators />
                                </Dialog>
                            </CSSTransition>
                            </div>
                        </div>
                        <div className="p-sm-12 p-md-8">
                            <h4>{this.props.title}</h4>
                            <div className="p-mr-4 p-ml-2 info-text">{Parser(this.props.content)}</div>
                            <p><span style={{ whiteSpace: 'nowrap' }}>par <span className="font-weight-bold">{this.props.author}</span>, {this.props.date}</span></p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article;
