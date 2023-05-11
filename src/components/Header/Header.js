/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import TekionLogo from "../../assets/home/tekion-logo.svg";
import { Link } from "react-router-dom";
import React from "react";

// import HamIcon from "../../assets/home/ham.svg";

import "./header.scss";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [Hamburger, setHamburger] = useState(true);
  const [isMobileMenuActive, setActive] = useState(false);

  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuActive]);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleSideMenuMobile = () => {
    setActive(!isMobileMenuActive);
    setHamburger(!Hamburger);
  };

  const HeaderClass = visible ? "visible" : "hidden";

  return (
    <header className={`tek-ds-header ${HeaderClass}`}>
      <div className="container">
        <Row>
          <Col className="w-100">
            <nav className="nav-menu">
              <div className="tek-ds-header__logo-wrap">
                <Link to="/">
                  <img
                    className="tek-ds-header__logo"
                    src={TekionLogo}
                    alt="Tekion Logo"
                  />
                </Link>
              </div>
              <div
                className={
                  isMobileMenuActive
                    ? "mobile-sidebar-wrap active"
                    : "mobile-sidebar-wrap"
                }
              >
                {/* <Link to="/">
                  <img
                    className="tek-ds-header__logo"
                    src={TekionLogo}
                    alt="Tekion Logo"
                  />
                </Link> */}
                {/* <span
                  className="nav-menu__close icon-close c-pointer"
                  onClick={toggleSideMenuMobile}
                ></span> */}
                <div>
                  <ul className="tek-ds-header__menu">
                    <li>
                      <Link to="/">Brand</Link>
                    </li>
                    <li>
                      <Link to="/logo">Logo</Link>
                    </li>
                    <li>
                      <Link to="/typography">Typography</Link>
                    </li>
                    <li>
                      <Link to="/color">Color</Link>
                    </li>
                    <li className="position-relative more-trigger">
                      <p>More</p>

                      <div className="more-menu">
                        <Link to="/photography">Photography</Link>
                        <Link to="/brand-mockups">Brand Mockups</Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="primary-btn">
                    <span>Download Assets</span>
                  </button>
                </div>
              </div>
              <div
                className={
                  Hamburger ? "hamburger-icon" : "hamburger-icon active"
                }
                onClick={toggleSideMenuMobile}
              >
                {/* <img
                  src={HamIcon}
                  onClick={toggleSideMenuMobile}
                  alt="hamburger icon"
                /> */}
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
