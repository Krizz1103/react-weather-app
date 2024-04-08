import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This Website was coded by Kristin Kessler and is{" "}
          <a
            href="https://github.com/Krizz1103/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on Github
          </a>{" "}
          and hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}
