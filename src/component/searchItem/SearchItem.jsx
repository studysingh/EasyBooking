import React from "react";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
  const {
    imageSrc,
    title,
    distance,
    taxiOption,
    subtitle,
    features,
    cancelOption,
    cancelOptionSubtitle,
    rating,
    ratingValue,
    price,
  } = item;

  return (
    <div className="searchItem">
      <img src={imageSrc} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">{taxiOption}</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">{cancelOption}</span>
        <span className="siCancelOpSubtitle">{cancelOptionSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rating}</span>
          <button>{ratingValue}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
