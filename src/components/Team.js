import { Member } from "./Member";
import React from "react";

export const Team = (props) => {
  return (
    <div className="team">
      {props.members.map((member, index) => {
        return <Member name={member.name} key={index} />;
      })}
    </div>
  );
};
