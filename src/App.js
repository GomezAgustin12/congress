import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MembersView, DetailedView } from "./views";
import { Header, Footer } from "./components";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <div className='view-container'>
          <Router>
            <Route path='/' exact component={MembersView} />
            <Route path='/id/:id' component={DetailedView} />
          </Router>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
