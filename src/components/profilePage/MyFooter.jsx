import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonLink from "./Pippo/ButtonLink";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="text-secondary">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Informazioni</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Accessibilità</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Talent Solutions</p>
                </ButtonLink>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Linee guida della community</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Carriera</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Soluzioni di marketing</p>
                </ButtonLink>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Privacy e condizioni</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Opzioni per gli annunci pubblicitari</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Pubblicità</p>
                </ButtonLink>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Sales Solutions</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Mobile</p>
                </ButtonLink>
              </Col>
              <Col md={4}>
                <ButtonLink className="footer-small">
                  <p>Piccole imprese</p>
                </ButtonLink>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <ButtonLink className="footer-small">
                  <p>Centro sicurezza</p>
                </ButtonLink>
              </Col>
              <Col md={6}></Col>
            </Row>
            <div className="py-3">
              <ButtonLink className="footer-small">
                <p>LinkedIn Corporation © 2024</p>
              </ButtonLink>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex">
              <QuestionCircleFill color="dark" size={20} className="me-3" />
              <div className="d-flex flex-direction-column g-1">
                <p>Domande?</p>
                <p>Visita il nostro centro assistenza.</p>
              </div>
            </div>
            <div className="d-flex">
              <GearFill color="dark" size={22} className="me-3" />
              <div className="d-flex flex-direction-column g-1">
                <p>Gestisci il tuo account e la tua privacy</p>
                <p>Vai alle impostazioni</p>
              </div>
            </div>
            <div className="d-flex">
              <ShieldShaded color="dark" size={23} className="me-3" />
              <div className="d-flex flex-direction-column g-1">
                <p>Trasparenza sui contenuti consigliati</p>
                <p>Scopri di più sui contenuti consigliati.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
