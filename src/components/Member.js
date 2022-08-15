import React from "react";

export const Member = (props) => {
  return (
    <div>
      <p>名前:</p>
      <p>{props.name}</p>
    </div>
  );
};
