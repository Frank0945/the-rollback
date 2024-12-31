import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div id="aspectRatio" className="font-AnonymousPro text-2xl">
      <App />
    </div>
  </StrictMode>,
);
