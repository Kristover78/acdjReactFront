import React, { useState } from "react";
import Modal from "./Modal";

/* vhttps://medium.com/@olepetterkh/create-a-simple-lightbox-with-react-abe04e3e6e7b */
function LightBox({images}) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div>
            <img className="img-fluid" src={images[0]} alt="article" onClick={() => setSelectedIndex(0)}/>
            {selectedIndex >= 0 && <Modal images={images} selectedImg={images[selectedIndex]} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} /> }
        </div>
    )
}
export default LightBox
