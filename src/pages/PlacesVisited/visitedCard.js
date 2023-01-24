import React, { useRef, useState } from "react";
import "./style.css"
import { DETAILS, FULL_SCREEN, CANCEL } from "../../assets/images";
import { Image } from "../../components";

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
                <Image
                    src={data?.img}
                    alt="omers-visite-place"
                    width="250"
                    height="250"
                />
                <div className="buttons">
                    <div onClick={handleToggleDesc}>
                        <Image
                            src={DETAILS}
                            alt="details"
                        />
                    </div>
                    <div onClick={() => openModal(data?.img)}>
                        <Image
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
                        <Image
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