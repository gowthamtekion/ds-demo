import { Col, Row } from "antd";
// import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";
import { Tween } from "react-gsap";

import "./mockup-intro.scss";

import Cup from "../../../assets/mockups/cup.svg";
import Pen from "../../../assets/mockups/pen.svg";
import EnvelopeBig from "../../../assets/mockups/envelope-big.svg";
import Notebook from "../../../assets/mockups/notebook.svg";
import Device from "../../../assets/mockups/tekion-device.svg";
import Id from "../../../assets/mockups/id.svg";
import EnvelopeSmall from "../../../assets/mockups/envelope-small.svg";

import ApparelImage1 from "../../../assets/mockups/apparel-1.png";
import ApparelImage2 from "../../../assets/mockups/apparel-2.png";
import ApparelImage3 from "../../../assets/mockups/apparel-3.png";
import ApparelImage4 from "../../../assets/mockups/apparel-4.png";

import Stationery1 from "../../../assets/mockups/stationery-1.svg";
import Stationery2 from "../../../assets/mockups/stationery-2.svg";
import Stationery3 from "../../../assets/mockups/stationery-3.svg";
import Stationery4 from "../../../assets/mockups/stationery-4.svg";

import AccessoryImage1 from "../../../assets/mockups/accessory-1.svg";
import AccessoryImage2 from "../../../assets/mockups/accessory-2.svg";
import AccessoryImage3 from "../../../assets/mockups/accessory-3.svg";
import AccessoryImage4 from "../../../assets/mockups/accessory-4.svg";
import AccessoryImage5 from "../../../assets/mockups/accessory-5.svg";
import AccessoryImage6 from "../../../assets/mockups/accessory-6.svg";

import DrinkWare1 from "../../../assets/mockups/drink-ware-1.svg";
import DrinkWare2 from "../../../assets/mockups/drink-ware-2.svg";
import DrinkWare3 from "../../../assets/mockups/drink-ware-3.svg";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

// import ArrowRight from "../../../assets/home/arrow-right.svg";
// import ArrowLeft from "../../../assets/home/arrow-left.svg";

function MockupIntro() {
  // const triggerRef = useRef(null);
  // const [trigger, setTrigger] = useState(triggerRef.current);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        gsap.set(".tek-ds-mockup__elements .cup", {
          yPercent: 200,
        });
        gsap.set(".tek-ds-mockup__elements .pen", {
          yPercent: 300,
        });
        gsap.set(".tek-ds-mockup__elements .envelope-big", {
          yPercent: 400,
        });
        gsap.set(".tek-ds-mockup__elements .device", {
          yPercent: 600,
        });
        gsap.set(".tek-ds-mockup__elements .id", {
          yPercent: 700,
        });
        gsap.set(".tek-ds-mockup__elements .envelope-small", {
          yPercent: 800,
        });

        // setTrigger(triggerRef.current);

        // gallery animation
        gsap.to(".tek-ds-mockup__elements .cup", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
        gsap.to(".tek-ds-mockup__elements .pen", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
        gsap.to(".tek-ds-mockup__elements .envelope-big", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
        gsap.to(".tek-ds-mockup__elements .device", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
        gsap.to(".tek-ds-mockup__elements .id", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
        gsap.to(".tek-ds-mockup__elements .envelope-small", {
          yPercent: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".images-wrap",
            // markers: true,
            id: "images",
            scrub: true,
            start: "0% center",
            end: "100% center",
          },
        });
      },
    });
  });
  return (
    <section className="tek-ds-mockup pt-120">
      <div className="container">
        <Row>
          <Col md={{ span: 20, offset: 2 }}>
            <p className="fnt-28 text-center text-primary">Realistic</p>
            <h1 className="display-1 text-center mt-24">
              Evocative, inspiring, and intriguing
            </h1>
          </Col>
        </Row>
        <Tween
          to={{
            x: "0px",
            scrollTrigger: {
              trigger: ".images-wrap",
              start: "60% center",
              end: "100% center",
              scrub: 0.5,
              // markers: true,
              pin: true,
            },
          }}
        >
          <div className="images-wrap">
            <div className="new">
              <div className="tek-ds-mockup__elements">
                <img className="cup" src={Cup} alt="cup-mockup" />
                <img className="pen" src={Pen} alt="cup-mockup" />
                <img
                  className="envelope-big"
                  src={EnvelopeBig}
                  alt="cup-mockup"
                />
                <img className="notebook" src={Notebook} alt="cup-mockup" />
                <img className="device" src={Device} alt="cup-mockup" />
                <img className="id" src={Id} alt="cup-mockup" />
                <img
                  className="envelope-small"
                  src={EnvelopeSmall}
                  alt="cup-mockup"
                />
              </div>
            </div>
          </div>
        </Tween>

        <Row className="pt-280 ">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Apparels</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              The apparel section outlines specific guidelines for designing and
              presenting clothing and accessories in a visual representation.
              This may include items such as t-shirts, jackets, hats, and other
              accessories.
            </p>
          </Col>
        </Row>

        <Row gutter={24} className="apparel-images pt-160">
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale"
              src={ApparelImage1}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={ApparelImage2}
              alt="people"
            />
          </Col>
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale"
              src={ApparelImage3}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={ApparelImage4}
              alt="people"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Bags and Accessories:</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              This section focuses on creating visual representations of various
              items such as backpacks, keychain, pend rives and other small
              accessories. These guidelines provide specific instructions for
              creating designs that accurately represent the product with the
              brand logo on it.
            </p>
          </Col>
        </Row>

        <Row gutter={24} className="bags-images pt-160">
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale"
              src={AccessoryImage1}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={AccessoryImage2}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={AccessoryImage3}
              alt="people"
            />
          </Col>
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale"
              src={AccessoryImage4}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={AccessoryImage5}
              alt="people"
            />
            <img
              className="w-100 mt-24 hover-scale"
              src={AccessoryImage6}
              alt="people"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Drink ware</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Our drink ware mockup guidelines outline proper logo usage on
              products, specifying placement and sizing to maintain brand
              consistency and recognition.
            </p>
          </Col>
        </Row>

        <Row gutter={24} className="drinkware-images mt-24 pt-160">
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={DrinkWare1} alt="people" />
          </Col>
          <Col md={12}>
            <img
              className="w-100 h-100 obj-cover hover-scale"
              src={DrinkWare2}
              alt="people"
            />
          </Col>
        </Row>
        <Row gutter={24} className="people-images mt-24">
          <Col md={{ span: 24 }}>
            <img className="w-100 hover-scale" src={DrinkWare3} alt="people" />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Stationery</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Our stationery mockup ensure proper usage of our logo on pens,
              diary, letterheads, and envelopes. These guidelines specify
              placement, sizing, and color to maintain a consistent brand
              identity and recognition across all stationery items.
            </p>
          </Col>
        </Row>

        <Row gutter={24} className="stationery-images pt-160 pb-280">
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={Stationery1} alt="people" />
            <img
              className="w-100 mt-24 hover-scale"
              src={Stationery2}
              alt="people"
            />
          </Col>
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={Stationery3} alt="people" />
            <img
              className="w-100 mt-24 hover-scale"
              src={Stationery4}
              alt="people"
            />
          </Col>
        </Row>

        {/* <Row className="tek-ds-navigator">
          <Col xs={{ span: 12 }}>
            <div className="nav-left">
              <Link to="/imagery">
                <p className="h3 text-center text-primary">Imagery</p>
                <img src={ArrowLeft} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
          <Col
            xs={{ span: 12 }}
            className="tek-ds-navigator__wrap pointer-none"
          >
            <div>
              <Link to="/brand-mockups">
                <p className="h3 text-center text-primary">Brand Mockups</p>
                <img src={ArrowRight} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
}

export default MockupIntro;
