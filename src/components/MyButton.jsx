const MyButton = (props) => {
  return (
    <div style={{ border: "3px solid " + props.borderColor }}>
      <button onClick={props.clickFunction}>{props.label}</button>
    </div>
  );
};

export default MyButton;
