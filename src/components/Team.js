import { Member } from "./Member";

export const Team = (props) => {
  return (
    <div className="team">
      {props.members.map((member, index) => {
        return <Member name={member.name} key={index} />;
      })}
    </div>
  );
};
