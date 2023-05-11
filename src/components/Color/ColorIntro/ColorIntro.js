import { Col, Row } from "antd";
// import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./color-intro.scss";

import BrandColors from "../../../assets/color/brand-colors.svg";
import TekionGreys from "../../../assets/color/tekion-greys.svg";
// import ColorGuideline1 from "../../../assets/color/color-guideline-1.jpg";
// import ColorGuideline2 from "../../../assets/color/color-guideline-2.jpg";
// import ColorGuideline3 from "../../../assets/color/color-guideline-3.jpg";
// import ColorGuideline4 from "../../../assets/color/color-guideline-4.jpg";
import DontIcon from "../../../assets/Logo/dont-icon.svg";

import AccentColors from "../../../assets/color/accent-colors.svg";
import ColorAnimation from "../../../assets/color/color-banner.mp4";

import Incorrect1 from "../../../assets/color/incorrect-1.png";
import Incorrect2 from "../../../assets/color/incorrect-2.png";
import Incorrect3 from "../../../assets/color/incorrect-3.png";
import Incorrect4 from "../../../assets/color/incorrect-4.png";
import Incorrect5 from "../../../assets/color/incorrect-5.png";

import PieChartVideo from "../../../assets/color/pie-chart.mp4";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function ColorIntro() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        gsap.set(".layer-2", {
          opacity: 0,
          xPercent: 100,
        });
        gsap.set(".layer-2 p", {
          opacity: 0,
        });
        gsap.set(".layer-3", {
          opacity: 0,
          xPercent: 100,
        });
        gsap.set(".layer-2 p", {
          opacity: 0,
        });
        gsap.set(".layer-4", {
          opacity: 0,
          xPercent: 100,
        });
        gsap.set(".layer-2 p", {
          opacity: 0,
        });
        gsap.set(".layer-5", {
          opacity: 0,
          xPercent: 100,
        });
        gsap.set(".layer-2 p", {
          opacity: 0,
        });
        gsap.set(".layer-6", {
          opacity: 0,
          xPercent: 100,
        });
        gsap.set(".layer-2 p", {
          opacity: 0,
        });
        let cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".color-layers-wrap",
            start: "30% 50%",
            end: "100% 50%",
            // markers: true,
          },
        });
        cardTimeline
          .to(".layer-2", { opacity: 1, xPercent: 0, duration: 0.3 })
          .to(".layer-2 p", { opacity: 1, duration: 0.3 }, ">-0.2")

          .to(".layer-3", { opacity: 1, xPercent: 0, duration: 0.3 }, ">-0.2")
          .to(".layer-3 p", { opacity: 1, duration: 0.3 }, ">-0.2")

          .to(".layer-4", { opacity: 1, xPercent: 0, duration: 0.3 }, ">-0.2")
          .to(".layer-4 p", { opacity: 1, duration: 0.3 }, ">-0.2")

          .to(".layer-5", { opacity: 1, xPercent: 0, duration: 0.3 }, ">-0.2")
          .to(".layer-5 p", { opacity: 1, duration: 0.3 }, ">-0.2")

          .to(".layer-6", { opacity: 1, xPercent: 0, duration: 0.3 })
          .to(".layer-6 p", { opacity: 1, duration: 1 });
      },
    });
  });
  return (
    <section className="tek-ds-color">
      <div className="container">
        <Row>
          <Col md={{ span: 20, offset: 2 }}>
            <p className="fnt-28 text-center text-primary">Intuitive</p>
            <h1 className="display-1 text-center mt-24 px-20">
              Unite and enrich experineces
            </h1>
          </Col>
        </Row>

        <Row className="tek-ds-color__video">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={ColorAnimation} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Brand Colors</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Our color palette expands on our unique aesthetic and represents a
              contemporary and ever-changing Tekion. The colors are harmonious
              with nature, yet chosen for their luminous quality in the digital
              world.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <img
              className="w-100 hover-scale"
              src={BrandColors}
              alt="banner-logo"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Tekion Greys</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Tekion's color palette includes Shadow and Mist greys, which are
              ideal for conveying subtle distinctions in design. These greys can
              be used to define hierarchy and divide sections of a layout
              without drawing attention away from the main elements.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <img
              className="w-100 hover-scale"
              src={TekionGreys}
              alt="banner-logo"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Accent colors</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Tekion's accent colors serve a functional purpose, indicating
              status updates, emphasizing key information, and prompting users
              to take action where traditional colors fall short.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col className="color-layers-wrap">
            <img src={AccentColors} alt="accent-colors" />
            {/* <div className="color-layers layer-1">
              <div>
                <p className="fnt-18 fnt-700">Blue</p>
                <p className="fnt-16">Hex : 4A89DC </p>
                <p className="fnt-16">RGB : 74, 137, 220</p>
                <p className="fnt-16">CMYK : 66, 38, 0, 14 </p>
                <p className="fnt-16">Pantone : 279 C</p>
              </div>
            </div>
            <div className="color-layers layer-2">
              <div>
                <p className="fnt-18 fnt-700">Aqua green</p>
                <p className="fnt-16">Hex : 4FC1E9 </p>
                <p className="fnt-16">RGB : 79, 193, 233</p>
                <p className="fnt-16">CMYK : 66, 17, 0, 9</p>
                <p className="fnt-16">Pantone :2985 C</p>
              </div>
            </div>
            <div className="color-layers layer-3">
              <div>
                <p className="fnt-18 fnt-700">Mauve</p>
                <p className="fnt-16">Hex : EC87C0 </p>
                <p className="fnt-16">RGB : 236, 135, 192</p>
                <p className="fnt-16">CMYK : 0, 43, 19, 7</p>
                <p className="fnt-16">Pantone : 3265 C/U</p>
              </div>
            </div>
            <div className="color-layers layer-4">
              <div>
                <p className="fnt-18 fnt-700">Tangerine</p>
                <p className="fnt-16">Hex : FFA96C </p>
                <p className="fnt-16">RGB : 255, 169, 108</p>
                <p className="fnt-16">CMYK : 0, 34, 58, 0</p>
                <p className="fnt-16">Pantone : 7410 C</p>
              </div>
            </div>
            <div className="color-layers layer-5">
              <div>
                <p className="fnt-18 fnt-700">Lime</p>
                <p className="fnt-16">Hex : A0D468 </p>
                <p className="fnt-16">RGB : 160, 212, 104</p>
                <p className="fnt-16">CMYK : 41, 0, 77, 0</p>
                <p className="fnt-16">Pantone : 367 C</p>
              </div>
            </div>
            <div className="color-layers layer-6">
              <div>
                <p className="fnt-18 fnt-700">Lavender</p>
                <p className="fnt-16">Hex : 967ADC </p>
                <p className="fnt-16">RGB : 150, 122, 220</p>
                <p className="fnt-16">CMYK : 32, 45, 0, 14</p>
                <p className="fnt-16">Pantone : 2655 C</p>
              </div>
            </div> */}
          </Col>
        </Row>

        {/* <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Accent color Guidelines</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Follow these guidelines to help ensure the accent colors support
              the parent brand and do not compete, overwhelm, misdirect, or
              otherwise weaken the integrity of the parent brand.
            </p>
            <p className="fnt-28 mt-24">
              Accent colors are used to highlight key points, features,
              functions, or actions.
            </p>
          </Col>
        </Row> */}

        {/* <Row gutter={24} className="tek-ds-color__guideline pt-160">
          <Col md={12}>
            <img src={ColorGuideline1} alt="color-guideline" />
            <p className="fnt-28 mt-32">
              No single accent color should be mistaken as a primary color.
            </p>
          </Col>
          <Col md={12}>
            <img src={ColorGuideline2} alt="color-guideline" />
            <p className="fnt-28 mt-32">
              We recommend using no more than three accent colors per visual
              material.
            </p>
          </Col>
          <Col md={12}>
            <img src={ColorGuideline3} alt="color-guideline" />
            <p className="fnt-28 mt-32">
              Do not use accent colors for type without checking the contrast
              level.
            </p>
          </Col>
          <Col md={12}>
            <img src={ColorGuideline4} alt="color-guideline" />
            <p className="fnt-28 mt-32">
              Do not combine accent colors with product colors.
            </p>
          </Col>
        </Row> */}

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Proportions and usages</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              This color proportion wheel breaks down color usage for visual
              materials, to help maintain consistency across the brand.
            </p>
          </Col>
        </Row>

        <Row className="pt-160">
          <Col>
            <video className="w-100" autoPlay muted>
              <source src={PieChartVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-160">
          <Col md={{ span: 10 }}>
            <p className="fnt-28 fnt-700">
              These proportions apply to graphic elements and not to imagery.
            </p>
            <p className="fnt-28 mt-40">
              Percentages exclude photography or illustration, which may or may
              not have additional colors.
            </p>
          </Col>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="fnt-28 fnt-700">
              These proportions apply to graphic elements and not to imagery.
            </p>
            <p className="fnt-28 mt-40">
              Percentages exclude photography or illustration, which may or may
              not have additional colors.
            </p>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Incorrect usage</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">Here are examples of what to avoid.</p>
          </Col>
        </Row>

        <Row gutter={24} className="pt-160 tek-ds-color__incorrect pb-280">
          <Col md={{ span: 24 }}>
            <Row gutter={24}>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect1}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t use teal color as a background.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect2}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">Don’t use teal color for content.</p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect3}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t use teal color as text highlighter.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect4}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don't modify our teal color values for use.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect5}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t mix colors with our primary color.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row className="tek-ds-navigator">
          <Col xs={{ span: 12 }}>
            <div className="nav-left">
              <Link to="/typography">
                <p className="h3 text-center text-primary">Typography</p>
                <img src={ArrowLeft} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
          <Col xs={{ span: 12 }} className="tek-ds-navigator__wrap">
            <div>
              <Link to="/imagery">
                <p className="h3 text-center text-primary">Imagery</p>
                <img src={ArrowRight} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
}

export default ColorIntro;
