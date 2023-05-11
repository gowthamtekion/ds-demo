import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home/Home";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset tek-ds-homepage">
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
