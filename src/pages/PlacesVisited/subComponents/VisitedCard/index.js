import React, { useRef, useState } from "react";
import "./style.css"
import { DETAILS, FULL_SCREEN, CANCEL } from "../../../../assets/images";

const VisitedCard = () => {

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
                    src="https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer-2.jpg?alt=media&token=c9621ae1-2331-4215-8530-1ae07ec82029"
                    alt="photo"
                />
                <div className="buttons">
                    <div onClick={handleToggleDesc}>
                        <img
                            src={DETAILS}
                            alt="details"
                        />
                    </div>
                    <div>
                        <img
                            src={FULL_SCREEN}
                            alt="full-screen"
                        />
                    </div>
                </div>
            </div>
            <div ref={desc_content} className="desc-content">
                <h1>İstanbul Esenceli Piknik Alanı</h1>
                <div className="time">
                    <time dateTime="2019-06-05">05 06 2019</time>
                </div>
                <p>
                    Aile piknikleri... bu her yaz bizim gelenekselleşmiş, akrabalarımız ile birlikte yaptığımız 
                    bir piknik olmuştur. Tabi bu pikniklerde yaptığımız yüksek seviyede çekişme ve mızıkçılık 
                    olan volaybol maçlarımız bu pikniklere dahada eğlence katar.
                </p>
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