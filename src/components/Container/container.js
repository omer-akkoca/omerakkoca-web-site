import React from "react";
import "./style.css"

const Container = ({ children }) => {
    return(
        <div className="container">
            <div className="inner">
                {children}
            </div>
        </div>
    )
}

export { Container }