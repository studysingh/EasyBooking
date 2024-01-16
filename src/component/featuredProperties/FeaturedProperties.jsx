import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fpContainer">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://luxurystays.in/villas/AzulD/BD2.jpg"
          alt="Property 1"
        />
        <span className="fpName">Luxury Villa</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from $300</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>Outstanding</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://i.pinimg.com/736x/42/06/90/4206907d75c0bf3fbb000f8a60d7a46b.jpg"
          alt="Property 2"
        />
        <span className="fpName">Cozy Cottage</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://www.sbid.org/wp-content/uploads/2021/12/V.Concept-by-Victoria-Vitkovskaya-Almond-Apartment16.jpg"
          alt="Property 3"
        />
        <span className="fpName">Modern Apartment</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
