import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mockup from "../components/Mockups";

class MockupPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset">
          <Mockup />
        </main>
        <Footer />
      </div>
    );
  }
}

export default MockupPage;
