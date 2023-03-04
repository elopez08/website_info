import React from 'react';

import ImageProperty from "../ImageProperty/ImageProperty.js";

//import DRK_Icon from "../assets/img/DRK-Insignia.png";
//import DRK_Icon_Glow from "../assets/img/DRK_Icon_Glow.png";

class imageRender extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log('The picture that we are using is: ');
        console.log();
        return (
            <div>
                <ImageProperty />
            </div>
        )
    }

}

export default imageRender;