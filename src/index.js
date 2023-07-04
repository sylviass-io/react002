import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchEngine from "./SearchEngine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <SearchEngine />

    <footer>
      <br />
      <a href="https://github.com/sylviass-io/react001">Open source code</a>, by
      Sylvia SS
    </footer>
  </StrictMode>
);
