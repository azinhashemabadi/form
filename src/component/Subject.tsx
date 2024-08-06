import React from "react";
import './Subject.css'
interface Props {
  items: string[];
  onSelected: (item: string) => void;
}
function Subject({ onSelected, items }: Props) {
  return (
    <div className="title-subject">
      <h3>Your best subject</h3>
      <div className="subject">
        {items.map((item) => (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={() => onSelected(item)}
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subject;
