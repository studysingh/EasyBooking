import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featuredContainer">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg"
          alt="City 1"
        />
        <div className="featuredTitles">
          <h1>New York</h1>
          <h2>1200 hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
          alt="City 2"
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>800 hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cdn.britannica.com/39/94539-050-FC08A496/View-Tokyo.jpg"
          alt="City 3"
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>1500 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
