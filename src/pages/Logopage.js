import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";

class LogoPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset tek-ds-logopage">
          <Logo />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LogoPage;
