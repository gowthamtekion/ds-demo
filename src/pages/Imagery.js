import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Imagery from "../components/Imagery";

class ImageryPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset">
          <Imagery />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ImageryPage;
