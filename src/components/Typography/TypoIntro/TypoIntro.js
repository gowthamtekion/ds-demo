/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row } from "antd";
// import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./typo-intro.scss";

import TypeWriter from "../../../assets/typography/typewriter.jpg";
import Variable1 from "../../../assets/typography/variable-1.svg";
import Variable2 from "../../../assets/typography/variable-2.svg";
import Variable3 from "../../../assets/typography/variable-3.svg";
import Variable4 from "../../../assets/typography/variable-4.svg";
import Styling from "../../../assets/typography/styling.jpg";
import IndivisibleFont from "../../../assets/typography/indivisible-font.svg";
import InterFont from "../../../assets/typography/inter-font.svg";

import Principle1 from "../../../assets/typography/principle-1.svg";
import Principle2 from "../../../assets/typography/principle-2.svg";
import Principle3 from "../../../assets/typography/principle-3.svg";
import Principle4 from "../../../assets/typography/principle-4.svg";

import NoUsage1 from "../../../assets/typography/no-usage-1.png";
import NoUsage2 from "../../../assets/typography/no-usage-2.png";
import NoUsage3 from "../../../assets/typography/no-usage-3.png";
import NoUsage4 from "../../../assets/typography/no-usage-4.png";

import RefHandle from "../../../assets/typography/ref-handle.svg";
import Handle60 from "../../../assets/typography/handle-60.svg";
import Handle80 from "../../../assets/typography/handle-80.svg";
import Handle100 from "../../../assets/typography/handle-100.svg";
import Handle110 from "../../../assets/typography/handle-110.svg";

import ZipFolderIcon from "../../../assets/home/zip-folder.svg";
import FontIcon from "../../../assets/home/font-icon.svg";
import DownloadIcon from "../../../assets/home/arrow-down-circle.svg";
import ExternalLinkIcon from "../../../assets/home/external-link.svg";

import TyopBannerAnimation from "../../../assets/typography/typography.mp4";
import TextColorAnimation from "../../../assets/typography/text-color.mp4";

import TypographyLetters from "../../../assets/typography/typeface.svg";

import DontIcon from "../../../assets/Logo/dont-icon.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

// import ArrowRight from "../../../assets/home/arrow-right.svg";
// import ArrowLeft from "../../../assets/home/arrow-left.svg";

function TypoIntro() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        gsap.set(".line-length .paragraph-1 p", {
          xPercent: -100,
          opacity: 0,
        });
        gsap.set(".line-length .paragraph-2 p", {
          xPercent: -100,
          opacity: 0,
        });
        gsap.set(".line-length .paragraph-3 p", {
          xPercent: -100,
          opacity: 0,
        });
        gsap.set(".line-length .paragraph-4 p", {
          xPercent: -100,
          opacity: 0,
        });

        gsap.set(".heading", {
          yPercent: 100,
          opacity: 0,
        });
        gsap.set(".subheading", {
          yPercent: 100,
          opacity: 0,
        });
        gsap.set(".copy", {
          yPercent: 100,
          opacity: 0,
        });
        gsap.set(".regular", {
          yPercent: 100,
          opacity: 0,
        });

        gsap.set(".line-length .paragraph-1 .handle-60", {
          x: "-490px",
        });

        gsap.set(".line-length .paragraph-2 .handle-80", {
          x: "-570px",
        });

        gsap.set(".line-length .paragraph-3 .handle-100", {
          x: "-650px",
        });

        gsap.set(".line-length .paragraph-4 .handle-110", {
          x: "-724px",
        });

        gsap.set(".variable-images img", {
          y: "100%",
          opacity: 0,
        });

        let VariableAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".variable-images",
            start: "-90% top",
            end: "130% top",
            // markers: true,
          },
        });

        VariableAnimation.to(".heading", {
          yPercent: 0,
          duration: 0.5,
          opacity: 1,
        }).to(".variable-images img", {
          y: "0",
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
        });

        let TextAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".styles",
            start: "-40% top",
            end: "130% top",
            // markers: true
          },
        });

        TextAnimation.to(".heading", {
          yPercent: 0,
          duration: 0.3,
          opacity: 1,
        })
          .to(".subheading", { yPercent: 0, opacity: 1, duration: 0.5 })
          .to(".copy", { yPercent: 0, opacity: 1, duration: 0.5 })
          .to(".regular", { yPercent: 0, opacity: 1, duration: 0.5 });

        let LengthAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".line-length-wrap",
            start: "40% top",
            end: "100% top",
            // markers: true,
          },
        });
        LengthAnimation.to(".line-length .paragraph-1 p", {
          xPercent: 0,
          duration: 0.8,
          opacity: 1,
          ease: "back.out(1)",
        })
          .to(
            ".line-length .paragraph-1 .handle-60",
            { x: 0, duration: 0.8, ease: "back.out(1)" },
            "-=0.8"
          )

          .to(".line-length .paragraph-2 p", {
            xPercent: 0,
            duration: 0.8,
            opacity: 1,
            ease: "back.out(1)",
          })
          .to(
            ".line-length .paragraph-2 .handle-80",
            { x: 0, duration: 0.8, ease: "back.out(1)" },
            "-=0.8"
          )

          .to(".line-length .paragraph-3 p", {
            xPercent: 0,
            duration: 0.8,
            opacity: 1,
            ease: "back.out(1)",
          })
          .to(
            ".line-length .paragraph-3 .handle-100",
            { x: 0, duration: 0.8, ease: "back.out(1)" },
            "-=0.8"
          )

          .to(".line-length .paragraph-4 p", {
            xPercent: 0,
            duration: 0.8,
            opacity: 1,
            ease: "back.out(1)",
          })
          .to(
            ".line-length .paragraph-4 .handle-110",
            { x: 0, duration: 0.8, ease: "back.out(1)" },
            "-=0.8"
          );
      },
    });
  });
  return (
    <section className="tek-ds-typo">
      <div className="container">
        <div className="top-content">
          <div className="inner-content">
            <Row>
              <Col md={{ span: 24 }}>
                <p className="fnt-28 text-center text-primary">Thoughtful</p>
                <h1 className="display-1 text-center mt-24">
                  Elicit certain emotions and convey ideas.
                </h1>
              </Col>
            </Row>
            <Row className="tek-ds-typo__video">
              <Col>
                <video className="w-100" autoPlay muted loop>
                  <source src={TyopBannerAnimation} type="video/mp4" />
                </video>
              </Col>
            </Row>

            <Row className="pt-280">
              <Col md={{ span: 10 }}>
                <h1 className="h1">Typeface</h1>
              </Col>
              <Col md={{ span: 12, offset: 2 }}>
                <p className="fnt-28 mb-32">
                  “Indivisible Variable” is our new corporate typeface. It has
                  been carefully designed to meet our needs as a global
                  technology company and reflect our brand spirit, beliefs and
                  design principles.
                </p>
              </Col>
            </Row>

            <Row className="pt-160">
              <Col md={{ span: 24 }}>
                <img
                  className="hover-scale"
                  src={TypographyLetters}
                  alt="typography"
                />
              </Col>
            </Row>
          </div>

          <Row className="pt-280 weight-style">
            <Col md={{ span: 10 }}>
              <h1 className="h1">Weigts and styles</h1>
            </Col>
            <Col md={{ span: 12, offset: 2 }}>
              <p className="fnt-28">
                Titles, headings, and title sub-headings should appear in
                Indivisible Variable Extra Bold. These are written in sentence
                case and without a period at the end of the sentence.
              </p>
            </Col>
          </Row>

          <Row gutter={98} className="pt-160 styles">
            <Col md={{ span: 12 }}>
              <div>
                <span>Indivisible Variable weight 720</span>
                <p className="mt-24 heading">Title/heading</p>
              </div>
              <div>
                <span>Indivisible Variable weight 650</span>
                <p className="mt-24 subheading">Title subheading</p>
              </div>
              <div>
                <span>Indivisible Variable weight 650</span>
                <p className="mt-24 copy">Copy heading</p>
              </div>
              <div>
                <span>Indivisible Variable regular</span>
                <p className="mt-24 regular">
                  This is sample body copy. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </Col>
            <Col md={{ span: 12 }}>
              <img
                className="w-100 hover-scale pillar-video-placeholder "
                src={TypeWriter}
                alt="Banner video placeholder"
              />
            </Col>
          </Row>

          <Row className="pt-280">
            <Col md={{ span: 10 }}>
              <h1 className="h1">Variable</h1>
            </Col>
            <Col md={{ span: 12, offset: 2 }}>
              <p className="fnt-28">
                Variable is a modern typeface that allows for a range of
                customizable styles within a single font file. It offers
                versatility and flexibility in typography, enabling the creation
                of distinct and dynamic visual identities.
              </p>
            </Col>
          </Row>
          <Row gutter={24} className="variable-images pt-160">
            <Col md={{ span: 24 }}>
              <img className="w-100" src={Variable1} alt="people" />
              <img className="w-100" src={Variable2} alt="people" />
              <img className="w-100" src={Variable3} alt="people" />
              <img className="w-100" src={Variable4} alt="people" />
            </Col>
          </Row>

          <Row className="pt-280">
            <Col md={{ span: 10 }}>
              <h1 className="h1">Text color</h1>
            </Col>
            <Col md={{ span: 12, offset: 2 }}>
              <p className="fnt-28">
                Generally, all titles and subheadings should be 100% black over
                white or light backgrounds, and 100% white over black or dark
                backgrounds.
              </p>
            </Col>
          </Row>
          <Row gutter={24} className="people-images pt-160">
            <Col md={{ span: 24 }}>
              <video className="w-100" autoPlay muted loop>
                <source src={TextColorAnimation} type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="pt-280">
            <Col md={{ span: 10 }}>
              <h1 className="h1">Styling type</h1>
            </Col>
            <Col md={{ span: 12, offset: 2 }}>
              <p className="fnt-28">
                Correct capitalization and punctuation are just as critical to
                copy as typography. The following provides an overview of our
                editorial style and guidelines to keep in mind while writing.
              </p>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col md={{ span: 24 }}>
              <Row gutter={24} className="brand-elements-wrap pt-160">
                <Col md={12}>
                  <img src={NoUsage1} alt="Brand element" />
                  <div>
                    <img src={DontIcon} alt="icon" />

                    <p className="fnt-28">
                      Don’t use ampersands (&) or plus signs (+) in place of
                      "and"
                    </p>
                  </div>
                </Col>
                <Col md={12}>
                  <img src={NoUsage2} alt="Brand element" />
                  <div>
                    <img src={DontIcon} alt="icon" />

                    <p className="fnt-28">Don’t use the Oxford/serial comma</p>
                  </div>
                </Col>
                <Col md={12}>
                  <img src={NoUsage3} alt="Brand element" />
                  <div>
                    <img src={DontIcon} alt="icon" />
                    <p className="fnt-28">
                      Use en dashes (–), not hyphens, for a span or range of
                      numbers, dates or times
                    </p>
                  </div>
                </Col>
                <Col md={12}>
                  <img src={NoUsage4} alt="Brand element" />
                  <div>
                    <img src={DontIcon} alt="icon" />

                    <p className="fnt-28">Don’t use spaces around em dashes</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Row className="pt-280 line-length-wrap">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Line length</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Set the reading environment to suit the reader. Wide lines of text
              are difficult to read and make it harder for people to focus.
              While there is no right way to measure the perfect width for text,
              a good goal is to aim for between 80 and 100 characters per line
              including spacing. Setting an optimal line length will break up
              content into easily digestible information.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="line-length mt-160">
          <Col md={{ span: 24 }} className="pl-0">
            <div className="paragraph-1">
              <h6 className="fnt-32 fnt-600">Too narrow</h6>
              <div>
                <p className="fnt-16">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum. Nulla Lorem
                  mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor. Voluptate exercitation incididunt aliquip
                  deserunt reprehenderit elit laborum.
                </p>
                <img className="ref-handle" src={RefHandle} alt="ref handle" />
                <img className="handle-60" src={Handle60} alt="ref handle" />
              </div>
            </div>
            <div className="paragraph-2">
              <h6 className="fnt-32 fnt-600">Okay range</h6>
              <div>
                <p className="fnt-16">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum. Nulla Lorem
                  mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor. Voluptate exercitation incididunt aliquip
                  deserunt reprehenderit elit laborum.
                </p>
                <img className="handle-80" src={Handle80} alt="ref handle" />
              </div>
            </div>
            <div className="paragraph-3">
              <h6 className="fnt-32 fnt-600">Ideal range</h6>
              <div>
                <p className="fnt-16">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum. Nulla Lorem
                  mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor. Voluptate exercitation incididunt aliquip
                  deserunt reprehenderit elit laborum.
                </p>
                <img className="handle-100" src={Handle100} alt="ref handle" />
              </div>
            </div>
            <div className="paragraph-4">
              <h6 className="fnt-32 fnt-600">Too wide</h6>
              <div>
                <p className="fnt-16">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum. Nulla Lorem
                  mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor. Voluptate exercitation incididunt aliquip
                  deserunt reprehenderit elit laborum.
                </p>
                <img className="handle-110" src={Handle110} alt="ref handle" />
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-80">
          <Col md={10}>
            <p className="fnt-28 fnt-700">Presentations</p>
            <ul className="mt-40">
              <li>
                <p className="fnt-28">
                  Use Inter for Google Slides presentations
                </p>
              </li>
              <li>
                <p className="fnt-28">
                  If converting Google Slides to a Keynote or PowerPoint
                  presentation, use Larsseit throughout for headlines and body
                  text
                </p>
              </li>
              <li>
                <p className="fnt-28">
                  If the presentation originates in Keynote or PowerPoint,
                  follow regular brand font guidelines
                </p>
              </li>
            </ul>
          </Col>
          <Col md={{ span: 10, offset: 2 }}>
            <p className="fnt-28 fnt-700">Email</p>
            <ul className="mt-40">
              <li>
                <p className="fnt-28">Use Helvetica Neue for email</p>
              </li>
            </ul>
          </Col>
        </Row> */}

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Text over images</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Typography should either be black on light imagery or white on
              dark imagery. When aligned with the logo, typography and logo
              should not be the same color
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="pt-160">
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale pillar-video-placeholder "
              src={Principle1}
              alt="Banner video placeholder"
            />
            <img
              className="w-100 hover-scale mt-24  pillar-video-placeholder "
              src={Principle2}
              alt="Banner video placeholder"
            />
          </Col>
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale pillar-video-placeholder "
              src={Principle3}
              alt="Banner video placeholder"
            />
            <img
              className="w-100 hover-scale mt-24 pillar-video-placeholder"
              src={Principle4}
              alt="Banner video placeholder"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">System fallbacks</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              When our brand fonts are not supported, default to these fonts.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="people-images pt-160">
          <Col md={{ span: 12 }}>
            <img
              className="w-100 hover-scale"
              src={IndivisibleFont}
              alt="people"
            />
            <p className="fnt-28 fnt-700 mt-40 text-center">
              Indivisible Variable Font
            </p>
          </Col>
          <Col md={{ span: 12 }}>
            <img className="w-100 hover-scale" src={InterFont} alt="people" />
            <p className="fnt-28 fnt-700 mt-40 text-center">
              System Fallback - Helvertica Font
            </p>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Presentations and Word doc</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Use Inter for Google Slides presentations. If converting Google
              Slides to a Keynote or PowerPoint presentation, use Larsseit
              throughout for headlines and body text. If the presentation
              originates in Keynote or PowerPoint, follow regular brand font
              guidelines
            </p>
          </Col>
        </Row>
        <Row className="design-assets pt-160 pb-280">
          <Col className="w-100 hover-scale">
            <div>
              <img src={FontIcon} alt="zip folder icon" />
              <p className="fnt-28 fnt-700">Indivisible Variable Font</p>
            </div>
            <img
              className="c-pointer"
              src={ExternalLinkIcon}
              alt="download icon"
            />
          </Col>
          <Col className="w-100 hover-scale">
            <div>
              <img src={ZipFolderIcon} alt="zip folder icon" />
              <p className="fnt-28 fnt-700">Word doc</p>
            </div>
            <img className="c-pointer" src={DownloadIcon} alt="download icon" />
          </Col>
          <Col className="w-100 hover-scale">
            <div>
              <img src={ZipFolderIcon} alt="zip folder icon" />
              <p className="fnt-28 fnt-700">Master template</p>
            </div>
            <img className="c-pointer" src={DownloadIcon} alt="download icon" />
          </Col>
        </Row>

        {/* <Row className="tek-ds-navigator">
          <Col xs={{ span: 12 }}>
            <div className="nav-left">
              <Link to="/logo">
                <p className="h3 text-center text-primary">Logo</p>
                <img src={ArrowLeft} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
          <Col xs={{ span: 12 }} className="tek-ds-navigator__wrap">
            <div>
              <Link to="/color">
                <p className="h3 text-center text-primary">Color</p>
                <img src={ArrowRight} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
}

export default TypoIntro;
