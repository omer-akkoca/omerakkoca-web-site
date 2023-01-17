import React from "react";

const BookCard = ({ data }) => {
    return(
        <div className="books-card-wrapper">
            <div className="book-card">
                <div className="front-face">
                    <img
                        src={data.img}
                        alt={data.name}
                    />
                </div>
                <div className="back-face">
                    <h1>{data.name}</h1>
                    <h2>{data.writer}</h2>
                    <p>{data.text}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard;