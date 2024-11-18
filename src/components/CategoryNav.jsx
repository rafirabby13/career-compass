/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ServiceCard from "./ServiceCard.jsx";

const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
    console.log(services);
  };

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        const matchingData = data.filter((data) => data.category == category);
        console.log(matchingData);
        setServices(matchingData);
      });
  }, [category]);

  return (
    <div>
      <div className="py-20 flex items-center justify-between  mx-auto">
        <div>
          <h1>Our Services</h1>
        </div>
        <select
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Select A Category
          </option>
          {categories.map((category, i) => (
            <option key={i}>{category.category}</option>
          ))}
        </select>
      </div>
      {/* <div className="grid grid-cols-3 gap-5">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div> */}
    </div>
  );
};

export default CategoryNav;
