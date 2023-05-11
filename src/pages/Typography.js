import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typography from "../components/Typography";

class TypoPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset">
          <Typography />
        </main>
        <Footer />
      </div>
    );
  }
}

export default TypoPage;
