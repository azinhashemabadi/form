import React from "react";
import { useState } from "react";
import './Level.css'
interface Props {
  levels: string[]
  onSelectedLevel: (item: string) => void;
}
function Level({ onSelectedLevel, levels }: Props) {
  const [selectedLevel, setSelectedLevel] = useState();
  return (
    <div className="title-level">
      <h3>Select your choice</h3>
      <select
        className="form-select form-select-sm"
        aria-label="Small select example"
      >
        <option selected>Select your Ans</option>
        {levels.map((item) => (
            <option value="1" onClick={()=>onSelectedLevel(item)}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Level;
