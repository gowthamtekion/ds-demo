import { Col, Row } from "antd";
import TekionTlogo from "../../assets/home/tekion-t-logo.svg";
import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <footer className="tek-ds-footer">
      <div className="container">
        <Row>
          <Col className="tek-ds-footer__wrap w-100" md={{ span: 24 }}>
            <div className="tek-ds-footer__rights">
              <img src={TekionTlogo} alt="Tekion logo" />
              <p> &copy; 2023. All rights reserved.</p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://tekion.com/privacy/privacy-policy"
                rel="noreferrer"
              >
                Privacy policy
              </a>
              <span> | </span>
              <a
                target="_blank"
                href="https://tekion.com/legal"
                rel="noreferrer"
              >
                Legal
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
