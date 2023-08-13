import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./providers";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/400-italic.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/500-italic.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/600-italic.css";
import "react-vertical-timeline-component/style.min.css";
import "react-awesome-slider/dist/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
