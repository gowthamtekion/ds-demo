import React, { Component } from "react";
import Color from "../components/Color";
import Footer from "../components/Footer";
import Header from "../components/Header";

class ColorPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset">
          <Color />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ColorPage;
