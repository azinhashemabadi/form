import React from "react";
import { useState } from "react";
import './Gender.css'
function Select() {

  const [checkItem,setCheckItem] = useState({
    checkDefault: false,
    checkChecked: true,
  })    
  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {id,checked} = event.target;
    setCheckItem ({...checkItem, [id]: checked});
    console.log({id})
  }  
  return (
    <div className="gender">
      <h3>Gender*</h3>
      <div className="form-group-check">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Male"
          onChange={checkHandler}
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Female"
          onChange={checkHandler}
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Other"
          onChange={checkHandler}
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Other
        </label>
      </div>
      </div>
      
    </div>
  );
}

export default Select;
