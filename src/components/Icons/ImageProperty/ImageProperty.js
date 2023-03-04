
/*
import RDM_Crystal_Image from "./assets/img/RDM-Crystal.png";
import RDM_Icon from "./assets/img/RDM-Insignia.png";
*/

import React from 'react';

import DRK_Icon from "../assets/img/DRK-Insignia.png";
import DRK_Icon_Glow from "../assets/img/DRK_Icon_Glow.png";

import ImageToggleHover from "../ImageToggleHover/ImageToggleHover.js";

/*
import DoH_Crystal_Image from "./assets/img/DoH-Crystal.png";
import Weaver_Icon from "./assets/img/Weaver-Icon.png";
*/

const ImageProperty = () => {
    return (
        <div className = "insigniaLayout">
            <ImageToggleHover 
            primaryImg={DRK_Icon}
            secondaryImg={DRK_Icon_Glow}
            alt="Icon"
            />
        </div>
    )
}

export default ImageProperty;