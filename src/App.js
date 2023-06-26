import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Gabriela Lefter and it is open source on{" "}
          <a
            href="https://github.com/gabrielalowe/weather-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
