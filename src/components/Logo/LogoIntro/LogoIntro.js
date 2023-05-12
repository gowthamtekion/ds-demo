import { Col, Row } from "antd";
// import { Link } from "react-router-dom";
import React from "react";

import "./logo-intro.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import PrimaryLogo from "../../../assets/Logo/primary-logo.svg";
import Symbol from "../../../assets/Logo/symbol.svg";
import LogoColor1 from "../../../assets/Logo/logo-color-1.svg";
import LogoColor2 from "../../../assets/Logo/logo-color-2.svg";
import LogoColor3 from "../../../assets/Logo/logo-color-3.svg";

import LogoGuidance1 from "../../../assets/Logo/logo-guidance-1.svg";
import LogoGuidance2 from "../../../assets/Logo/logo-guidance-2.svg";
import LogoGuidance3 from "../../../assets/Logo/logo-guidance-3.svg";
import LogoGuidance4 from "../../../assets/Logo/logo-guidance-4.svg";

import Logosystem1 from "../../../assets/Logo/logo-system-1.svg";
import Logosystem2 from "../../../assets/Logo/logo-system-2.svg";
import Logosystem3 from "../../../assets/Logo/logo-system-3.svg";
import Logosystem4 from "../../../assets/Logo/logo-system-4.svg";
import Logosystem5 from "../../../assets/Logo/logo-system-5.svg";
import Logosystem6 from "../../../assets/Logo/logo-system-6.svg";

import Scale from "../../../assets/Logo/scale.svg";

import NoStrechLogo from "../../../assets/Logo/incorrect-1.png";
import NoContainLogo from "../../../assets/Logo/incorrect-2.png";
import NoGradientLogo from "../../../assets/Logo/incorrect-3.png";
import NoColorLogo from "../../../assets/Logo/incorrect-4.png";
import KnockOutLogo from "../../../assets/Logo/incorrect-5.png";
import NoOutlineLogo from "../../../assets/Logo/incorrect-6.png";
import BiggerLogo from "../../../assets/Logo/incorrect-7.png";
import BiggerSuffix from "../../../assets/Logo/incorrect-8.png";
import WithoutSuffix from "../../../assets/Logo/incorrect-9.png";

import LogoBannerAnimation from "../../../assets/Logo/logo-banner-animation.mp4";
import ClearSpaceVideo from "../../../assets/Logo/clear-space.mp4";
import LogoPlacementsVideo from "../../../assets/Logo/logo-placements.mp4";
import ConstructionsVideo from "../../../assets/Logo/construction.mp4";

import ZipFolderIcon from "../../../assets/home/zip-folder.svg";
import DownloadIcon from "../../../assets/home/arrow-down-circle.svg";

import DontIcon from "../../../assets/Logo/dont-icon.svg";

// import ArrowRight from "../../../assets/home/arrow-right.svg";
// import ArrowLeft from "../../../assets/home/arrow-left.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function LogoIntro() {
  return (
    <section className="tek-ds-logo">
      <div className="container">
        <Row>
          <Col md={{ span: 24 }}>
            <p className="fnt-28 text-center text-primary">Constructive</p>
            <h1 className="display-1 text-center mt-24 px-20">
              Creating with purpose and passion.
            </h1>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={LogoBannerAnimation} type="video/mp4" />
            </video>
          </Col>
        </Row>
        <Row className="pt-280  banner-image">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Logo Construction</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Tekion's logo is a sleek and modern wordmark that communicates the
              company's forward-thinking approach. The futuristic design evokes
              speed, innovation, and trust, while the rounded ends of each word
              add a touch of approachability. Overall, the logo is a powerful
              representation of Tekion's confidence and dependability.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={ConstructionsVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Clear space</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              To ensure clear visibility, maintain a minimum distance equal to
              the height of the letter 'T' between the Tekion logo and other
              visual elements. This space, known as the area of isolation or
              clear space, should be left uninterrupted and adhered to in most
              situations.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={ClearSpaceVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Logo variants</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              Our Logo Variations provides guidelines for using our two
              variations: the primary logo and the symbol logo. Adhering to
              these guidelines ensures consistent and effective branding across
              all applications.
            </p>
          </Col>
        </Row>
        <Row gutter={24} className="pt-160">
          <Col md={12}>
            <img
              className="w-100 hover-scale"
              src={PrimaryLogo}
              alt="banner-logo"
            />
          </Col>
          <Col md={12}>
            <img className="w-100 hover-scale" src={Symbol} alt="banner-logo" />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Scale</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              To preserve legibility, the Tekion primary logo should not be
              scaled smaller than 1 inch wide, the and the Tekion symbol should
              not be scaled smaller than 1/4 inch wide.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <img className="w-100 hover-scale" src={Scale} alt="banner-logo" />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Logo color</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              The primary colors of Tekion are teal, and then white/black. This
              is demonstrative of a company with confidence and self-assurance.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col span={12}>
            <img
              className="w-100 hover-scale"
              src={LogoColor1}
              alt="banner-logo"
            />
          </Col>
          <Col span={12}>
            <img
              className="w-100 hover-scale"
              src={LogoColor2}
              alt="banner-logo"
            />
            <img
              className="w-100 hover-scale"
              src={LogoColor3}
              alt="banner-logo"
            />
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Placement</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              The logo should always be anchored to a layout grid. The primary
              logo can be placed top left or right, bottom left or right, or
              centered at the top, middle, or bottom of your layout.
            </p>
          </Col>
        </Row>
        <Row className="pt-160">
          <Col>
            <video className="w-100" autoPlay muted loop>
              <source src={LogoPlacementsVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Logo guidance</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              When product logos, such as those developed by Tekion, need to
              show a clear relationship with the parent brand, this is the
              convention to follow.
            </p>
          </Col>
        </Row>
        <Row gutter={{ md: 24 }}>
          <Col md={{ span: 24 }}>
            <Row gutter={24} className="brand-elements-wrap pt-160">
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={LogoGuidance1}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    Use a minimum length of 3/4 for the logo and display the
                    'Powered by' text in a semi-bold Inter font
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={LogoGuidance2}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    When using the logo with an emblem, display it at 3/4 length
                    and use a semi-bold inter font for the 'Powered by' text.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={LogoGuidance3}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    If the word 'Tekion' is preceded by the suffix 'by', then
                    the full length of the parent logo should be used.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={LogoGuidance4}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    Prioritize the Tekion logo and use it before the emblem and
                    partner logo.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Logo system</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              The Tekion logo system enables customers to recognize us across
              all our offerings: the many programs, partners, events, and
              products that our customers engage with every day. At its heart is
              the Tekion parent brand.
            </p>
          </Col>
        </Row>
        <Row gutter={{ md: 24 }}>
          <Col md={{ span: 24 }}>
            <Row gutter={24} className="brand-elements-wrap pt-160">
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem1}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    Tekion logo and program name can appear in the same line,
                    provided they are separated by a distance of x/2 width of
                    the logo.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem2}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    Program name can come in the next line with x/2 width of the
                    logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem3}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    If the program name spans two lines, it can middle align it
                    with the left edge of the Tekion logo.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem4}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    If program is of two lines it can left align with the tekion
                    logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem5}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    Pair the Tekion symbol with the program name if the name is
                    the primary identifier.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={Logosystem6}
                  alt="Brand element"
                />
                <div>
                  <p className="fnt-28">
                    If the program name consists of primary and secondary text,
                    consider using the Tekion symbol.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="pt-280">
          <Col md={{ span: 10 }}>
            <h1 className="h1">Incorrect usage</h1>
          </Col>
          <Col md={{ span: 12, offset: 2 }}>
            <p className="fnt-28">
              To uphold a consistent brand identity, we always treat the Tekion
              Word Mark correctly in terms of style, size, positioning, and
              orientation. This is also required for legal reasons.
            </p>
          </Col>
        </Row>

        <Row gutter={{ md: 24 }} className="pb-280">
          <Col md={{ span: 24 }}>
            <Row gutter={24} className="brand-elements-wrap pt-160">
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={NoStrechLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t change the direction or stretch the logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={NoContainLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">Don’t contain the logo in a shape</p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={NoGradientLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">Don’t use gradient to color the logo</p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={NoColorLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t use colors that aren’t the core colors for the Tekion
                    logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={KnockOutLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">Don’t knock out images into the logo</p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={NoOutlineLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t outline, stylize, distort the logo in anyway.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={BiggerLogo}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t make the Tekion logo bigger than the partner logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={BiggerSuffix}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t use bigger suffix before Tekion logo
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img
                  className="w-100 hover-scale"
                  src={WithoutSuffix}
                  alt="Brand element"
                />
                <div>
                  <img src={DontIcon} alt="icon" />
                  <p className="fnt-28">
                    Don’t use Tekion logo without the suffix
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row gutter={{ md: 40 }} className="tek-ds-navigator">
          <Col xs={{ span: 12 }}>
            <div className="nav-left">
              <Link to="/">
                <p className="h3 text-center text-primary">Brand</p>
                <img src={ArrowLeft} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
          <Col xs={{ span: 12 }} className="tek-ds-navigator__wrap">
            <div>
              <Link to="/typography">
                <p className="h3 text-center text-primary">Typography</p>
                <img src={ArrowRight} alt="Right Arrow" />
              </Link>
            </div>
          </Col>
        </Row> */}
        <Row className="design-assets pb-280">
          <Col className="w-100 hover-scale">
            <div>
              <img src={ZipFolderIcon} alt="zip folder icon" />
              <p className="fnt-28 fnt-700">Logo assets</p>
            </div>
            <img className="c-pointer" src={DownloadIcon} alt="download icon" />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default LogoIntro;
