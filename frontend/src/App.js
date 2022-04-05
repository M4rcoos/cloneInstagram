import React from "react";

import Header from "./components/Header";

import RoutesFeed from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesFeed />
    </BrowserRouter>
  );
}

export default App;
