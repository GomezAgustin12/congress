import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MembersView } from "./views";
import { Navbar } from "./components";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path='/' exact component={MembersView} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
