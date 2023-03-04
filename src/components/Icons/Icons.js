import React from 'react';
import './Icons.css';

//import { render } from 'react-dom';

import ImageToggleHover from "./ImageToggleHover/ImageToggleHover.js";
//import RenderImage from "./renderImage/renderImage.js";

import RDM_Crystal_Image from "./assets/img/RDM-Crystal.png";
import RDM_Icon from "./assets/img/RDM-Insignia.png";
import RDM_Icon_Glow from "./assets/img/RDM_Icon_Glow.png";

import DRK_Crystal_Image from "./assets/img/DRK-Crystal.png";
import DRK_Icon from "./assets/img/DRK-Insignia.png";
import DRK_Icon_Glow from "./assets/img/DRK_Icon_Glow.png";

import DoH_Crystal_Image from "./assets/img/DoH-Crystal.png";
import Weaver_Icon from "./assets/img/Weaver-Icon.png";
import Weaver_Icon_Glow from "./assets/img/Weaver_Icon_Glow.png";


const Icons = () => {

    return (
        <div id = "iconGroupBar">
            <div id="iconImg">
                <div id ="DRK_Template">
                    {/*
                    <div className = "insigniaLayout">
                        <ImageToggleHover 
                        primaryImg={DRK_Icon}
                        secondaryImg={DRK_Icon_Glow}
                        alt="DRK-Icon"
                        />
                    </div>
                    */}
                    
                    <div id = "DRK-Crystal-Image">
                        <img src = {DRK_Crystal_Image} alt = "DRK-Crystal" />
                    </div>
                        <div id ="Icons">
                        <ImageToggleHover 
                        primaryImg={DRK_Icon}
                        secondaryImg={DRK_Icon_Glow}
                        />
                    </div>
                </div>

                <div id ="RDM_Template">
                    <div id = "RDM-Crystal-Image">
                        <img src = {RDM_Crystal_Image} alt = "RDM-Crystal" />
                    </div>
                    <div id="Icons">
                        <ImageToggleHover 
                            primaryImg={RDM_Icon}
                            secondaryImg={RDM_Icon_Glow}
                        />
                    </div>

                </div>

                <div id ="Weaver_Template">
                    <div id = "DoH-Crystal-Image">
                        <img src = {DoH_Crystal_Image} alt = "DoH-Crystal" />
                    </div>
                    <div id ="Icons">
                    <ImageToggleHover 
                            primaryImg={Weaver_Icon}
                            secondaryImg={Weaver_Icon_Glow}
                        />
                    </div>
                </div> 
            </div>
        </div>

    );

}

export default Icons;