import React, { useRef } from 'react';


const ImageToggleHover = (primaryImg) => {
    const imageRef = useRef(null);

    return (
        <img
            onMouseOver= {() => {
                imageRef.current.src = primaryImg.secondaryImg;
            }}
            onMouseOut = {() => {
                imageRef.current.src = primaryImg.primaryImg;
            }}
            src = {primaryImg.primaryImg}
            alt=""
            ref={imageRef}
        />
    );
}

export default ImageToggleHover;