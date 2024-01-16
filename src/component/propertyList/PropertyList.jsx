import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="plContainer">
      <div className="pl">
        <div className="plItem">
          <img
            className="plImg"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2021/10/Luxury-resorts-in-the-world.jpg"
            alt="Hotel 1"
          />
          <div className="plTitles">
            <h1>Luxury Resort</h1>
            <h2>150 rooms</h2>
          </div>
        </div>
        <div className="plItem">
          <img
            className="plImg"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f4/d1/e2/city-center-hotel.jpg?w=700&h=-1&s=1"
            alt="Hotel 2"
          />
          <div className="plTitles">
            <h1>City Center Hotel</h1>
            <h2>100 rooms</h2>
          </div>
        </div>
        <div className="plItem">
          <img
            className="plImg"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/337393998.jpg?k=3d3d7d0b348c3d1e1c31036fe14717da59eb7211e577ec2fbafb78bc253b3d29&o=&hp=1"
            alt="Hotel 3"
          />
          <div className="plTitles">
            <h1>Beachfront Resort</h1>
            <h2>200 rooms</h2>
          </div>
        </div>
        <div className="plItem">
          <img
            className="plImg"
            src="https://s3.ap-southeast-1.amazonaws.com/mytourcdn.com/resources/pictures/hotels/8/x581528797774_khach_san_cozy_boutique_da_lat.jpg"
            alt="Hotel 4"
          />
          <div className="plTitles">
            <h1>Cozy Boutique Hotel</h1>
            <h2>50 rooms</h2>
          </div>
        </div>
        <div className="plItem">
          <img
            className="plImg"
            src="https://www.telluride.com/site/assets/files/34622/6-bedroom_cabin_-_living_area_with_view_of_mountains.2000x1125.webp"
            alt="Hotel 5"
          />
          <div className="plTitles">
            <h1>Mountain Lodge</h1>
            <h2>80 rooms</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
