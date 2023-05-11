import { Col, Row } from "antd";
// import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./imagery-intro.scss";

import RealFile1 from "../../../assets/imagery/real-file-1.jpg";
import RealFile2 from "../../../assets/imagery/real-file-2.jpg";
import RealFile3 from "../../../assets/imagery/real-file-3.jpg";
import RealFile4 from "../../../assets/imagery/real-file-4.jpg";
import RealFile5 from "../../../assets/imagery/real-file-5.jpg";
import RealFile6 from "../../../assets/imagery/real-file-6.jpg";

import Color1 from "../../../assets/imagery/color-1.jpg";
import Color2 from "../../../assets/imagery/color-2.jpg";
import Color3 from "../../../assets/imagery/color-3.jpg";

import Lighting1 from "../../../assets/imagery/lighting-1.png";
import Lighting2 from "../../../assets/imagery/lighting-2.png";
import Lighting3 from "../../../assets/imagery/lighting-3.png";

import Guidance1 from "../../../assets/imagery/guidance-1.jpg";
import Guidance2 from "../../../assets/imagery/guidance-2.jpg";

import CompositionGuideline1 from "../../../assets/imagery/composition-guideline-1.png";
import CompositionGuideline2 from "../../../assets/imagery/composition-guideline-2.png";

import LightingGuideline1 from "../../../assets/imagery/lighting-guideline-1.png";
import LightingGuideline2 from "../../../assets/imagery/lighting-guideline-2.png";

import Composition from "../../../assets/imagery/composition.png";

import Incorrect1 from "../../../assets/imagery/incorrect-photography-1.png";
import Incorrect2 from "../../../assets/imagery/incorrect-photography-2.png";
import Incorrect3 from "../../../assets/imagery/incorrect-photography-3.png";
import Incorrect4 from "../../../assets/imagery/incorrect-photography-4.png";
import Incorrect5 from "../../../assets/imagery/incorrect-photography-5.png";

import PhotoAnimation from "../../../assets/imagery/photography.mp4";

import DontIcon from "../../../assets/Logo/dont-icon.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

// import ArrowRight from "../../../assets/home/arrow-right.svg";
// import ArrowLeft from "../../../assets/home/arrow-left.svg";

function ImageryIntro() {
  useEffect(() => {
    // ScrollTrigger.matchMedia({
    //   "(min-width: 1200px)": function () {
    //     gsap.set(".doucment-images img", {
    //       y: "400px",
    //     });
    //     // setTrigger(triggerRef.current);
    //     let cardTimeline = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: ".doucment-images",
    //         start: "-40% top",
    //         end: "100% top",
    //         markers: true,
    //         scrub: false,
    //       },
    //     });
    //     cardTimeline.to(
    //       ".doucment-images img",
    //       {
    //         y: "0",
    //         duration: 0.8,
    //         opacity: 1,
    //         // ease: "Power0.easeNone",
    //         // stagger: "0.1",
    //       }
    //       // "-=0.3"
    //     );
    //   },
    // });
  });

  return (
    <section className="tek-ds-imagery pt-120">
      <div className="container">
        <Row>
          <Col md={{ span: 24 }}>
            <p className="fnt-28 text-center text-primary">Stories</p>
            <h1 className="display-1 text-center mt-24 px-20">
              Creating an emotional connection to our brand.
            </h1>
          </Col>
        </Row>

        <Row className="tek-ds-imagery__video">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={PhotoAnimation} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 8 }}>
            <h1 className="h1">Documenting real life</h1>
          </Col>
          <Col md={{ span: 12, offset: 4 }}>
            <p className="fnt-28">
              Tekion's photography aims to showcase diversity and inclusivity
              across different sections, such as People, Automotive,
              Infrastructure, and Workplace, while engaging customers with
              relatable stories.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="doucment-images pt-160">
          <Col md={{ span: 8 }}>
            <img className="w-100" src={RealFile1} alt="people" />
          </Col>
          <Col md={{ span: 10 }}>
            <img className="w-100" src={RealFile2} alt="people" />
            <Row gutter={24} className="mt-24">
              <Col span={12}>
                <img className="w-100" src={RealFile3} alt="people" />
              </Col>
              <Col span={12}>
                <img className="w-100" src={RealFile4} alt="people" />
              </Col>
            </Row>
          </Col>
          <Col md={6} className="mt-xs-24">
            <img className="w-100 " src={RealFile5} alt="people" />
            <img className="w-100 mt-24" src={RealFile6} alt="people" />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Color</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-30">
              Color has such power, it can change the way we think, feel and
              behave.
            </p>
            <p className="fnt-28 mt-64">
              To maintain a consistent and cohesive visual aesthetic, our photos
              should adhere to an approved color palette. This includes a hint
              of teal, with color balance in every photo.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="people-images pt-160">
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={Color1} alt="people" />
          </Col>
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={Color2} alt="people" />
          </Col>
          <Col md={{ span: 24 }} className="mt-24">
            <img className="w-100 hover-scale" src={Color3} alt="people" />
          </Col>
        </Row>

        <Row className="pt-160">
          <p className="fnt-30">Guidance</p>
        </Row>

        <Row gutter={24} className="mt-80">
          <Col span={12}>
            <img
              className="w-100  hover-scale"
              src={Guidance1}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Images should be graded to give them a consistent tint of teal.
            </p>
          </Col>
          <Col span={12}>
            <img
              className="w-100  hover-scale"
              src={Guidance2}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Ensure that the highlights are not blown away and contrast is not
              too much
            </p>
          </Col>
        </Row>

        <Row className="pt-160">
          <p className="fnt-30">Chromatic Framework</p>
        </Row>
        <Row gutter={0} className="mt-80 color-palettes">
          <Col span={6}>
            <div className="color-palette  hover-scale"></div>
          </Col>
          <Col span={6}>
            <div className="color-palette  hover-scale"></div>
          </Col>
          <Col span={6}>
            <div className="color-palette  hover-scale"></div>
          </Col>
          <Col span={6}>
            <div className="color-palette  hover-scale"></div>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Compostion</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-30">A focused glimpse into a captured moment.</p>
            <p className="fnt-28 mt-64">
              Our photos should be dynamic, intentional, and clear in structure.
              They use simple composition to tell customer stories and provide a
              focused glimpse into a captured moment.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="pt-160">
          <Col md={{ span: 24 }}>
            <img className="w-100 hover-scale" src={Composition} alt="people" />
          </Col>
        </Row>

        <Row className="pt-160">
          <p className="fnt-30">Guidance</p>
        </Row>

        <Row gutter={24} className="mt-80">
          <Col span={12}>
            <img
              className="w-100 hover-scale"
              src={CompositionGuideline1}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Highlight the subject with the rule of thirds and leading lines.
            </p>
          </Col>
          <Col span={12}>
            <img
              className="w-100 hover-scale"
              src={CompositionGuideline2}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Use negative space for balance and symmetry, avoiding a cold
              feeling.
            </p>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Lighting</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-30">
              Shaping the overall mood, tone and visual impact of an image.
            </p>
            <p className="fnt-28 mt-64">
              Consistency is key in our photography, including color palette and
              lighting. We strive for a cohesive visual aesthetic through an
              approved palette and consistent lighting, with attention to light
              sources, angles, and intensity.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="pt-160">
          <Col md={{ span: 8 }}>
            <img className="w-100 hover-scale" src={Lighting1} alt="people" />
          </Col>
          <Col md={{ span: 8 }}>
            <img className="w-100 hover-scale" src={Lighting2} alt="people" />
          </Col>
          <Col md={{ span: 8 }}>
            <img className="w-100 hover-scale" src={Lighting3} alt="people" />
          </Col>
        </Row>

        <Row className="pt-160">
          <p className="fnt-30">Guidance</p>
        </Row>

        <Row gutter={24} className="mt-80">
          <Col span={12}>
            <img
              className="w-100 hover-scale "
              src={LightingGuideline1}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Be mindful of the color temperature of the light sources
            </p>
          </Col>
          <Col span={12}>
            <img
              className="w-100 hover-scale"
              src={LightingGuideline2}
              alt="photography guidance"
            />
            <p className="fnt-28 mt-32 pr-30">
              Use a combination of natural and artificial lighting to achieve
              the desired effect
            </p>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Incorrect Photography</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Here are some instances of photography that do not meet our
              standards and should be avoided to ensure a consistent.
            </p>
          </Col>
        </Row>

        <Row gutter={24} className="tek-ds-imagery__incorrect pb-280">
          <Col md={{ span: 24 }}>
            <Row gutter={24} className="pt-160">
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Incorrect1}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">Don’t use cluttered images</p>
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
                  <p className="fnt-28">
                    Don’t use images with bad composition
                  </p>
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
                    Avoid images with vibrant colours, only use the palette
                    that’s been defined
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
                    Don’t use stock images that have fake smile, or forced
                    smile, it gives unnatural feel
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
                    Avoid using additional filters and effects for the images
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ImageryIntro;
