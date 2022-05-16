import React from "react";

import Navbar from "./pages/Navbar";
import Main from "./pages/Main";
import Event from "./pages/Event";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import Social from "./pages/Social";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Event />
      <Menu />
      <Store />
      <Social />
      <Footer />
    </>
  );
};

export default App;
