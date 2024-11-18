import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard.jsx";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('../review.json')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)
        })
    },[])
    return (
        <div className="">
        <div className="flex gap-5">
            {
                reviews.map(review=><ReviewCard
                key={review.id}
                review={review}
                ></ReviewCard>)
            }
        </div>
    </div>
    );
};

export default Reviews;