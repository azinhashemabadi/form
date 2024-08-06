import React from "react";
import { ReactNode } from "react";
interface Props {
  //children: ReactNode;
  onClick: () => void;
}
function Button({ onClick }: Props) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button type="button" className="btn btn-success" onClick={onClick}>
        Submit
      </button>
    </div>
  );
}

export default Button;
