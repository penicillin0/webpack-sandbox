export const Member = (props) => {
  return (
    <div style={{ border: solid, borderWidth: "1px" }}>
      <p>名前:</p>
      <p>{props.name}</p>
    </div>
  );
};
