import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle"; 
import { TextField } from "@material-ui/core";

import vec1 from "../../images/contact/1.png";
import vec2 from "../../images/contact/2.png";

const RSVP = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState("");
  const [guestList, setGuestList] = useState([]);
  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const updatedError = { ...error };
    updatedError[e.target.name] = '';

    // Update state
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'guest') {
      setGuest(e.target.value);
    }

    setError(updatedError);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // ...

    // Clear form fields
    setName('');
    setGuest('');
    setError({});
  };

  useEffect(() => {
    const fetchGuestList = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/hn304pxxerdph"
        );
        const data = await response.json();
        // Assuming the data structure contains guest information
        setGuestList(data); // Update guestList with fetched data
      } catch (error) {
        console.error("Error fetching guest list:", error);
      }
    };
    fetchGuestList(); // Call the function when the component mounts

  }, []);
  console.log(guestList)
  return (
    <section className={`wpo-contact-section rsvp`} id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <SectionTitle MainTitle={"Are you attending?"} />
            <form onSubmit={submitHandler} className="form">
              <div className="row">
                <div>
                  <div className="form-field">
                    <input
                      value={name}
                      onChange={changeHandler}
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <p>{error.name ? error.name : ""}</p>
                    <ul className="autocomplete-result-list"></ul>
                  </div>
                </div>
                <div className="submit-area">
                  <div className="form-submit">
                    <button type="submit" className="theme-btn-s3">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="border-style"></div>
          </div>
          <div className="vector-1">
            <img src={vec1} alt="" />
          </div>
          <div className="vector-2">
            <img src={vec2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
