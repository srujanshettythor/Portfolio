import React from "react";
import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="cert-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="cert-txtx">
            <h4>{title}</h4>
            <span>View Certificate</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
