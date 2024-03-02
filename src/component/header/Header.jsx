import "./Header.css";
import { MdHotel } from "react-icons/md";
import { FaPlane, FaCar, FaBed, FaTaxi } from "react-icons/fa";
import { FaCalendarDays, FaPerson } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";

import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
  const [activeService, setActiveService] = useState("Stays"); //
  // handling the date range picker
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // handling the no. of persons and rooms
  const [requirement, setRequirement] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // handling increase and decrease button for requirement
  const handleRequirementBtn = (name, op) => {
    if (name === "adult") {
      if (requirement.adult < 2 && op === "d") return;
      setRequirement((prevRequirement) => ({
        ...prevRequirement,
        adult:
          op === "i" ? prevRequirement.adult + 1 : prevRequirement.adult - 1,
      }));
    } else if (name === "children") {
      if (requirement.children < 1 && op === "d") return;
      setRequirement((prevRequirement) => ({
        ...prevRequirement,
        children:
          op === "i"
            ? prevRequirement.children + 1
            : prevRequirement.children - 1,
      }));
    } else if (name === "room") {
      if (requirement.room < 2 && op === "d") return;
      setRequirement((prevRequirement) => ({
        ...prevRequirement,
        room: op === "i" ? prevRequirement.room + 1 : prevRequirement.room - 1,
      }));
    }
  };

  // handling
  const handleSearchButton = () => {
    navigate("/EasyBooking/list", {
      state: { searchLocation, date, requirement },
    });
  };
  const [showRequirementBox, setShowRequirementBox] = useState(false);
  return (
    <div className="header ">
      <div className={`headerContainer ${type === "home" ? "" : "notHome"}`}>
        {/* Services Provided  */}
        <div className="headerList">
          <div
            className={`headerListItem ${
              activeService === "Stays" ? "active" : ""
            }`}
            onClick={() => setActiveService("Stays")}
          >
            <MdHotel />
            Stays
          </div>

          <div
            className={`headerListItem ${
              activeService === "Flights" ? "active" : ""
            }`}
            onClick={() => setActiveService("Flights")}
          >
            <FaPlane />
            Flights
          </div>

          <div
            className={`headerListItem ${
              activeService === "Car" ? "active" : ""
            }`}
            onClick={() => setActiveService("Car")}
          >
            <FaCar />
            Car
          </div>

          <div
            className={`headerListItem ${
              activeService === "Attractions" ? "active" : ""
            }`}
            onClick={() => setActiveService("Attractions")}
          >
            <FaBed />
            Attractions
          </div>

          <div
            className={`headerListItem ${
              activeService === "Taxi" ? "active" : ""
            }`}
            onClick={() => setActiveService("Taxi")}
          >
            <FaTaxi />
            Taxi
          </div>
        </div>
        {/* HomePage message */}
        {type === "home" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>

            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Easybooking account
            </p>

            <button className="headerBtn">Sign in / Register</button>

            {/* Selecting all the requirement location date etc   */}
            <div className="headerSearch">
              {/* Search Bar  */}
              <div className="headerSearchItem">
                <FaBed color="#817171" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={(event) => {
                    setSearchLocation(event.target.value);
                  }}
                />
              </div>

              {/* Date Picker  */}
              <div className="headerSearchItem">
                <FaCalendarDays color="#817171" />
                <span
                  className="headerSearchText"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  {format(date[0].startDate, "dd/MM/yyyy")} to
                  {format(date[0].endDate, "dd/MM/yyyy")}
                </span>
                {showDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                      setDate([item.selection]);
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              {/*  Requirement selection */}
              <div className="headerSearchItem">
                <span
                  className="headerSearchText requirement"
                  onClick={() => setShowRequirementBox(!showRequirementBox)}
                >
                  <FaPerson />
                  {`${requirement.adult} adult ${requirement.children} ${
                    requirement.children < 2 ? "child" : "children"
                  } ${requirement.room} ${
                    requirement.room === 1 ? "room" : "rooms"
                  }`}
                </span>
                {showRequirementBox && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <IoMdRemoveCircle
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("adult", "d")}
                        />
                        <span className="optionCounterNumber">
                          {requirement.adult}
                        </span>
                        <IoAddCircleSharp
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("adult", "i")}
                        />
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <IoMdRemoveCircle
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("children", "d")}
                        />
                        <span className="optionCounterNumber">
                          {requirement.children}
                        </span>
                        <IoAddCircleSharp
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("children", "i")}
                        />
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <IoMdRemoveCircle
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("room", "d")}
                        />
                        <span className="optionCounterNumber">
                          {requirement.room}
                        </span>
                        <IoAddCircleSharp
                          className="optionCounterButton"
                          onClick={() => handleRequirementBtn("room", "i")}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Buttonn  */}
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearchButton}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
