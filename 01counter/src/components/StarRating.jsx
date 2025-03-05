import React, { useState } from 'react'

function StarRating() {

    const [rating, setRating] = useState(-1);

    const handleClick = (ratingPos) => {
        setRating(ratingPos)
    }

    return (
        <div >
            {
                [...Array(5)].map((_, index) => (
                    <span key={index} alt={index} className={`cursor-pointer text-2xl ${index<=rating ?"text-yellow-500" : "text-gray-400"}`} onClick={()=> handleClick(index)}> &#9733; </span>
                ))
            }
        </div>
    )
}

export default StarRating