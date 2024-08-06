import React from "react";
import { useState } from "react";
import { MouseEvent } from "react";
import { useEffect } from "react";
import './Identity.css'
interface Props {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
}
function Identity({firstName,lastName,email,contact}: Props) {
  const [formHandler, setFormHandler] = useState<Props>({
    firstName: firstName,
    lastName: lastName,
    email: email,
    contact: contact,
  });
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormHandler(prevState => ({ ...prevState, [name]: value }));
    console.log({ ...formHandler, [name]: value });
  };
  useEffect(() => {
    console.log(formHandler);
  }, [formHandler]);
  return (
    <div>
      <div className="form">
        <h3 className="">First Name*</h3>
        <input
          key={0}
          className="form-control"
          type="text"
          placeholder="Enter First Name"
          aria-label="default input example"
          onChange={inputHandler}
          // value={formHandler.firstName}
        ></input>
        <h3 className="">Last Name*</h3>
        <input
          key={1}
          className="form-control"
          type="text"
          placeholder="Enter Last Name"
          aria-label="default input example"
          onChange={inputHandler}
        ></input>
        <h3 className="">Email*</h3>
        <input
          key={2}
          className="form-control"
          type="text"
          placeholder="Enter Email"
          aria-label="default input example"
          onChange={inputHandler}
        ></input>
        <h3 className="">Contact*</h3>
        <input
          key={3}
          className="form-control"
          type="text"
          placeholder="Enter Contact"
          aria-label="default input example"
          onChange={inputHandler}
        ></input>
      </div>
    </div>
  );
}

export default Identity;
