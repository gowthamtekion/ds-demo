/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Col, Row } from "antd";
import "./home-component.scss";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";

import BrandImage from "../../../assets/home/brand-image.svg";
import Innovation from "../../../assets/home/innovative.png";
import Inspiring from "../../../assets/home/inspiring.png";
import Exciting from "../../../assets/home/exciting.png";

import GalleryImg1 from "../../../assets/home/gallery-img-1.png";
import GalleryImg2 from "../../../assets/home/gallery-img-2.png";
import GalleryImg3 from "../../../assets/home/gallery-img-3.png";
import GalleryImg4 from "../../../assets/home/gallery-img-4.png";
import GalleryImg5 from "../../../assets/home/gallery-img-5.png";
import GalleryImg6 from "../../../assets/home/gallery-img-6.png";
import GalleryImg7 from "../../../assets/home/gallery-img-7.png";
import GalleryImg8 from "../../../assets/home/gallery-img-8.png";

import HoverImg1 from "../../../assets/home/hover-logo-1.png";
import HoverImg2 from "../../../assets/home/hover-logo-2.png";
import HoverImg3 from "../../../assets/home/hover-logo-3.png";
import HoverImg4 from "../../../assets/home/hover-logo-4.png";
import HoverImg5 from "../../../assets/home/hover-logo-5.png";

import HomeBannerAnimation from "../../../assets/home/home-banner-animation.mp4";

import ZipFolderIcon from "../../../assets/home/zip-folder.svg";
import FontIcon from "../../../assets/home/font-icon.svg";
import DownloadIcon from "../../../assets/home/arrow-down-circle.svg";
import ExternalLinkIcon from "../../../assets/home/external-link.svg";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function HomeComponent() {
  useEffect(() => {
    gsap.set(".gallery-row-1", {
      xPercent: 0,
      yPercent: 0,
      x: -600,
      y: 0,
    });
    gsap.set(".gallery-row-2", {
      xPercent: 0,
      yPercent: 0,
      x: 400,
      y: 0,
    });

    //gallery animation
    gsap.to(".gallery-row-1", {
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".gallery-row-1",
        // markers: true,
        id: "row-1",
        scrub: true,
        start: "-110% center",
        end: "200% center",
      },
    });
    //gallery animation
    gsap.to(".gallery-row-2", {
      xPercent: 0,
      yPercent: 0,
      x: -100,
      y: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".gallery-row-1",
        // markers: true,
        id: "row-1",
        scrub: true,
        start: "-90% center",
        end: "200% center",
      },
    });

    gsap.set(".tek-ds-home__links .link-list-item img", {
      yPercent: -50,
      xPercent: -50,
    });

    let activeImage;
    gsap.utils.toArray(".link-list-item").forEach((el) => {
      let image = el.querySelector(".link-list-item img"),
        setX,
        setY,
        align = (e) => {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow,
        });

      el.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        if (activeImage) {
          // if there's an actively-animating one, we should match its position here
          gsap.set(image, {
            x: gsap.getProperty(activeImage, "x"),
            y: gsap.getProperty(activeImage, "y"),
          });
        }
        activeImage = image;
        // eslint-disable-next-line no-unused-expressions
        (setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" })),
          (setY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3" }));
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });
  });
  return (
    <section className="tek-ds-home">
      <div className="container first-container">
        <Row>
          <Col md={{ span: 20, offset: 2 }}>
            <p className="fnt-28 text-center text-primary">Brand Station</p>
            <h1 className="display-1 text-center mt-24">
              One unified effort creates great design.
            </h1>
          </Col>
        </Row>
        <Row className="tek-ds-home__video">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={HomeBannerAnimation} type="video/mp4" />
            </video>
          </Col>
        </Row>
        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">One brand, One identity</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              We needed a cohesive, holistic Tekion brand station aka “TBS” that
              would build consistency, and bring all our visual communication
              under one roof. We resolved to make Tekion Instantly recognisable,
              Unique, and Scalable.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <img src={BrandImage} alt="brand imgae" />
          </Col>
        </Row>
        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Brand pillars</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Our brand pillars embody our identity, reflecting our beliefs and
              driving our actions. With innovation, excitement, and inspiration
              at their core, they shape the products and marketing materials we
              create.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="pt-160">
          <Col md={{ span: 8 }}>
            <img
              className="w-100 hover-scale"
              src={Innovation}
              alt="innovation"
            />
          </Col>
          <Col md={{ span: 8 }}>
            <img
              className="w-100 hover-scale"
              src={Exciting}
              alt="innovation"
            />
          </Col>
          <Col md={{ span: 8 }}>
            <img
              className="w-100 hover-scale"
              src={Inspiring}
              alt="innovation"
            />
          </Col>
        </Row>
        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Brand elements</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              The Tekion Brand Station currently comprises five core elements
              that help unify and communicate our brands with consistency and
              clarity. They include our logo, color, typography, photography
              styles, and design layouts.x
            </p>
          </Col>
        </Row>
        <Row className="tek-ds-home__links pt-160">
          <Col className="w-100">
            <div className="link-list">
              <div className="link-list-item">
                <Link to="/logo">
                  <div className="link-item-content">
                    <div className="title-wrap">
                      <h1 className="h1 text-primary title-1">Logo</h1>
                      <h1 className="h1 text-primary title-2">Logo</h1>
                    </div>
                    <p className="fnt-28 text-primary">Constructive</p>
                  </div>
                  <div className="link-item-line">
                    <div className="line-fill"></div>
                  </div>
                </Link>
                <img src={HoverImg1} alt="hover item" />
              </div>
              <div className="link-list-item">
                <Link to="/color">
                  <div className="link-item-content">
                    <div className="title-wrap">
                      <h1 className="h1 text-primary title-1">Color</h1>
                      <h1 className="h1 text-primary title-2">Color</h1>
                    </div>
                    {/* <h1 className="h1 text-primary">Color</h1> */}
                    <p className="fnt-28 text-primary">Versatile</p>
                  </div>
                  <div className="link-item-line">
                    <div className="line-fill"></div>
                  </div>
                </Link>
                <img src={HoverImg2} alt="hover item" />
              </div>
              <div className="link-list-item">
                <Link to="/typography">
                  <div className="link-item-content">
                    <div className="title-wrap">
                      <h1 className="h1 text-primary title-1">Typography</h1>
                      <h1 className="h1 text-primary title-2">Typography</h1>
                    </div>
                    {/* <h1 className="h1 text-primary">Typography</h1> */}
                    <p className="fnt-28 text-primary">Thoughtful</p>
                  </div>
                  <div className="link-item-line">
                    <div className="line-fill"></div>
                  </div>
                </Link>
                <img src={HoverImg3} alt="hover item" />
              </div>
              <div className="link-list-item">
                <Link to="photography">
                  <div className="link-item-content">
                    <div className="title-wrap">
                      <h1 className="h1 text-primary title-1">Photography</h1>
                      <h1 className="h1 text-primary title-2">Photography</h1>
                    </div>
                    {/* <h1 className="h1 text-primary">Photography</h1> */}
                    <p className="fnt-28 text-primary">Creative</p>
                  </div>
                  <div className="link-item-line">
                    <div className="line-fill"></div>
                  </div>
                </Link>
                <img src={HoverImg4} alt="hover item" />
              </div>
              <div className="link-list-item">
                <Link to="brand-mockups">
                  <div className="link-item-content">
                    <div className="title-wrap">
                      <h1 className="h1 text-primary title-1">
                        Brand in action
                      </h1>
                      <h1 className="h1 text-primary title-2">
                        Brand in action
                      </h1>
                    </div>
                    {/* <h1 className="h1 text-primary">Brand in action</h1> */}
                    <p className="fnt-28 text-primary">Realistic</p>
                  </div>
                  <div className="link-item-line">
                    <div className="line-fill"></div>
                  </div>
                </Link>
                <img src={HoverImg5} alt="hover item" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="pt-280 tek-ds-home__gallery pb-280">
        <div className="tek-ds-home__gallery-wrap">
          <div className="gallery-row gallery-row-1">
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg1}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg2}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg3}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg4}
                  alt="gallery"
                />{" "}
              </div>
            </div>
          </div>
          <div className="gallery-row gallery-row-2">
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg5}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg6}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg7}
                  alt="gallery"
                />{" "}
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <img
                  className="w-100 hover-scale"
                  src={GalleryImg8}
                  alt="gallery"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-280">
        <Row className="design-assets">
          <Col className="w-100 hover-scale">
            <div>
              <img src={ZipFolderIcon} alt="zip folder icon" />
              <p className="fnt-28 fnt-700">Logo assets</p>
            </div>
            <img className="c-pointer" src={DownloadIcon} alt="download icon" />
          </Col>
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
      </div>
    </section>
  );
}

export default HomeComponent;
