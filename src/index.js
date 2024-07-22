import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <StoreContextProvider>
  <Main />
  </StoreContextProvider>
  </BrowserRouter>
);
