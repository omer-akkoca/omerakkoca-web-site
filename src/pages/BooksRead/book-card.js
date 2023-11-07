import React, { useMemo } from "react";
import { Image } from "../../components";
import moment from "moment";

const BookCard = ({ data }) => {

    const start = useMemo(() => data?.started_at.toDate(), [data])
    const end = useMemo(() => {
        if (data.ended_at) {
            return moment(data.ended_at.toDate()).format('Do/MM/YYYY')
        } else {
            return "Devam Ediyor"
        }
    }, [data])

    return(
        <div className="books-card-wrapper">
            <div className="book-card">
                <div className="front-face">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width="213.88"
                        height="333.33"
                    />
                </div>
                <div className="back-face" style={{ backgroundImage: `url(${data.img})` }}>
                    <div className="back-face-content">
                        <h1>{data.title}</h1>
                        <h2>{data.author}</h2>
                        <div className="line"/>
                        <h3>{`${moment(start).format('Do/MM/YYYY')} - ${end}`}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;