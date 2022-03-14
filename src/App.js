import "./App.css";
import FirstComponent, { name, surname } from "./components/FirstComponent";
import MyButton from "./components/MyButton";

// this syntax very HTML-like is called JSX
// it's still a template language
// JSX takes care of outputting CONTENT out of React Components

// a React Component can be as easy as a function returning JSX

const App = () => {
  console.log(name, surname);

  return (
    <div className="App">
      <header className="App-header">
        <MyButton
          label="Happy Birthday!"
          borderColor="green"
          clickFunction={() => alert("🎉")}
        />
        <MyButton
          label="Show the weather"
          borderColor="red"
          clickFunction={() => console.log("sunny")}
        />
        <FirstComponent color="purple" paragraphContent="Header section" />
        <FirstComponent color="yellow" paragraphContent="Main section" />
      </header>
    </div>
  );
};

export default App;

// PROPS
// props are usefult for making your component DYNAMIC
// because you'll hardcode LESS things into it
// this is great for re-usability and maintainance
// a props is basically an attribute for a React Component
// PROPS are helping you DRY
// Dont
// Repeat
// Yourself

// STATE
