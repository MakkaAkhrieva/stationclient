import App from "./App.js";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Store from "./store/index.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const store = new Store();

export const Context = createContext({
  store: store,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        store: store,
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>,
);

