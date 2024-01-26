import { Col, Container, Row } from "react-bootstrap";
import JobsFooter from "./JobsFooter";
import JSidebarRight from "./JSidebarLeft";
import JobsSearch from "./JobsSearch";
import Opportunity1 from "./Opportunity1";

const JobsPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <JSidebarRight />
          </Col>
          <Col xs={12} md={6}>
            <JobsSearch />
            <Opportunity1 />
          </Col>
          <Col xs={12} md={3}>
            <JobsFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsPage;
