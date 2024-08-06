import React from "react";
import { useState } from "react";
import { MouseEvent } from "react";
import { ChangeEvent } from "react";
import './About.css'
function About() {
  const [selectedText, setSelectedText] = useState("");
  const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    if (target) console.log(target.value);
  };
  return (
    <div className="title-about">
      <h3 className="about">About</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="About your self"
          onChange={inputHandler}
        ></textarea>
      </div>
    </div>
  );
}

export default About;
