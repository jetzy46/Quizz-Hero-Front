import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import PageContainer from "./App/Components/PageContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageContainer>
  </React.StrictMode>
);
