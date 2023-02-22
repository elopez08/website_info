import React from 'react';
import './Icons.css';

import DRK_Icon from "./assets/img/DRK_Icon.png";
import RDM_Icon from "./assets/img/RDM_Icon.png"


const Icons = () => {

    return (
        <>
        <div id="iconImg">  
            <img src = {DRK_Icon} alt = "DRK"/>
            <img src = {RDM_Icon} alt = "RDM"/>
        </div>
        </>

    );

}

export default Icons;