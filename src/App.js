import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  const [value, setValue] = useState("");
  useEffect(() => {}, [value]);

  return (
    <>
      <GlobalStyles />
      <Navbar setValue={setValue} />

      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home value={value} setValue={setValue} />}
          />

          <Route path="/RecipeDetails" component={() => <RecipeDetails />} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
