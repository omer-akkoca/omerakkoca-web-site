import React, { useRef, useState } from "react";
import "./style.css"
import { DETAILS, FULL_SCREEN, CANCEL } from "../../../../assets/images";

const VisitedCard = ({ data, openModal }) => {

    const desc_content = useRef()

    const [details,setDetails] = useState(false)

    const handleToggleDesc = () => {
        setDetails(curr => !curr)
        if (!details) {
            desc_content.current.classList.add("active")
        } else {
            desc_content.current.classList.remove("active")
        }
    }

    return (
        <div className="visited-card">
            <div className="img-content">
                <img
                    src={data?.img}
                    alt="omers-visite-place"
                />
                <div className="buttons">
                    <div onClick={handleToggleDesc}>
                        <img
                            src={DETAILS}
                            alt="details"
                        />
                    </div>
                    <div onClick={() => openModal(data?.img)}>
                        <img
                            src={FULL_SCREEN}
                            alt="full-screen"
                        />
                    </div>
                </div>
            </div>
            <div ref={desc_content} className="desc-content">
                <h1>{data?.location}</h1>
                <div className="time">
                    <time dateTime="2019-06-05">{data?.date}</time>
                </div>
                <p>{data?.description}</p>
                <div className="buttons">
                    <div onClick={handleToggleDesc}>
                        <img
                            src={CANCEL}
                            alt="details"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { VisitedCard }