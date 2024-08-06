import React from "react";
import { useState } from "react";
import './Resume.css'
function Resume() {

  const [selectedFile,setSelectedFile] = useState<File | null>(null);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]||null;
    setSelectedFile(file);
    if(file){
        console.log(file);
    }
  };
  return (
    <div className="title-resume">
        <h3>Upload Resume*</h3>
      <div className="mb-3">
        <input className="form-control" type="file" id="formFile" onChange={inputHandler}></input>
      </div>
    </div>
  );
}
export default Resume;
