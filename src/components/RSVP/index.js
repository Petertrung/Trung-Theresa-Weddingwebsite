import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { TextField } from "@material-ui/core";
import { Autocomplete, Grid} from "@mui/material";

import vec1 from "../../images/contact/1.png";
import vec2 from "../../images/contact/2.png";

const RSVP = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState([
    {
      Family: "A/C Khang/Tâm",
      Name: "Chị Tâm",
      Affiliation: "TN",
      "": "Mom/Dad Moi",
      RSVP: "",
    },
  ]);
  const [guestList, setGuestList] = useState([]);
  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const updatedError = { ...error };
    updatedError[e.target.name] = "";

    // Update state
    if (e.target.name === "name") {
      setName(e.target.value);
    } 
    //else if (e.target.name === "guest") {
    //   setGuest(e.target.value);
    // }
    console.log(name)

    setError(updatedError);
  };

  const handleRemoveGuest = (i) => {
    const updatedGuests = [...guest.slice(0, i), ...guest.slice(i + 1)];
    setGuest(updatedGuests);
  };
  

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // ...

    // Clear form fields
    setName("");
    setGuest("");
    setError({});
  };


  useEffect(() => {
    const fetchGuestList = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/hn304pxxerdph");
        const data = await response.json();
        // Assuming the data structure contains guest information
        setGuestList(data); // Update guestList with fetched data
      } catch (error) {
        console.error("Error fetching guest list:", error);
      }
    };
    fetchGuestList(); // Call the function when the component mounts
  }, []);
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
                    {/* <input
                      value={name}
                      onChange={changeHandler}
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    /> */}
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      onChange={changeHandler}
                      value={name}
                      options={guestList.map((option) => (option.Family + ' - '+ option.Name)) || []}
                      groupBy={(option) => option.Family}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Name"
                          className="form-control"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />

                    <p>{error.name ? error.name : ""}</p>
                  </div>
                  <div>
                    {guest.map((guests, index) => (
                      <Grid container spacing={2} key={guests.Name}>
                        <Grid xs={11}>
                            <p>{guests.Family + " - " + guests.Name}</p>
                        </Grid>
                        <Grid xs={1}>
                            <i className="ti-close" onClick={() =>{handleRemoveGuest(index)}} />
                        </Grid>
                      </Grid>
                    ))}
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
