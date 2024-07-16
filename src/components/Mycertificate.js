import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const MyCertificates = () => {
  const certificates = [
    {
      title: "Automate Cybersecurity Tasks with Python",
      link: "https://coursera.org/share/41f812487eb2220c2a075b9bd0ae5d20",
    },
    {
      title: "Data Analysis with R Programming",
      link: "https://coursera.org/share/c5709c53102659c715754c613cce5c0b",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      link: "https://coursera.org/share/b9d0749eca0ee39294027fbab0472db7",
    },
    {
      title: "Generative AI: Introduction and Applications",
      link: "https://coursera.org/share/4b22d66b3bbe14a8241a80efc2106f37",
    },
    {
      title: "Foundations of Cybersecurity",
      link: "https://coursera.org/share/dbede29f53c9f2e473485fbf59aee714",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      link: "https://coursera.org/share/950d73cf3155e7af1c3bd0522800459f",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      link: "https://coursera.org/share/1a07f9f6f038a32a0aff291b95728b72",
    },
  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Certificates</h2>
                  <p>My Coursera Certificates</p>
                  <Row>
                    {certificates.map((certificate, index) => (
                      <CertificateCard key={index} {...certificate} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
