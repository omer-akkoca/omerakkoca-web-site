import React, { useState } from "react";

const default_image = "https://moderndiplomacy.eu/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" 

const Image = ({ alt, ...rest }) => {

    const [load,setLoad] = useState(false)
    
    return(
        <div style={{ position: "relative" }}>
            <img
                alt={alt}
                {...rest}
                onLoad={() => setLoad(true)}
                style={{ display: load ? "block" : "none" }}
            />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: load ? "none" : "block" }}>
                <img
                    src={default_image}
                    alt={"default-image"}
                    style={{ objectFit: "cover", height: "100%" }}
                />
            </div>
        </div>    
    )
}

export { Image }