const FirstComponent = (props) => {
  // props is ALWAYS going to be an object
  console.log(props);

  console.log("Hello, I'm FirstComponent getting mounted!");

  const myStyle = {
    backgroundColor: props.color,
  };

  const myFirstName = "Stefano";

  return (
    <>
      <h2 style={myStyle} className="color-primary">
        Hello World from React.js!
      </h2>
      <p>{props.paragraphContent}</p>
    </>
    // this <> is a React Fragment, a virtual wrapper for JSX elements
  );
};

export const name = "STEFANO";
export const surname = "CASASOLA";

// you need to EXPORT every component you write
export default FirstComponent;

// now FirstComponent is ready to be used somewhere else

// the style attribute in JSX is an object
// {
//     margin: 0,
//     padding: 1rem
// }
