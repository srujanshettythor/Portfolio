import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; // Adjust the import if necessary
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import sajju from "../assets/img/shetty.svg";
import shetty from "../assets/img/Srujanshetty.png";

export const Myfooter = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={sajju} alt="Logo" width={800} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/srujanshetty7">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/srujan.sheety?mibextid=ZbWKwL">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/_srujan.shetty_">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Thank you for visiting my Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
