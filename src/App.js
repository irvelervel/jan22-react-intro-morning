import "./App.css";
import FirstComponent from "./components/FirstComponent";

// this syntax very HTML-like is called JSX
// it's still a template language
// JSX takes care of outputting CONTENT out of React Components

// a React Component can be as easy as a function returning JSX

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <FirstComponent />
        <FirstComponent />
      </header>
    </div>
  );
};

export default App;
