import { Col, Container, Row } from "react-bootstrap";
import JobsFooter from "../profilePage/utility/JobsFooter";
import JSidebarRight from "./JSidebarLeft";

const JobsPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <JSidebarRight />
          </Col>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={3}>
            <JobsFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsPage;
