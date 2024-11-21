import { useEffect, useState } from "react";
import RevCard from "./RevCard.jsx";

const Rev = () => {
   
  const [filteredReviews, setFilteredReviews] = useState([]);
  

  useEffect(() => {
    // Fetch reviews from a JSON file or API
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        
        setFilteredReviews(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  

 

  return (
    <div className="pb-16 px-4 md:px-8">
      
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 mb-20 text-center lg:text-start">
        What Our Clients Say
      </h1>

      
      

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <RevCard key={review.id} review={review} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No reviews match the selected filters.
          </p>
        )}
      </div>
    </div>)
};

export default Rev;