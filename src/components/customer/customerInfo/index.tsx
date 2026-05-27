import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import DetailStudent from "./Detail.Student";
// import StatsStudents from "./Stats.student";
// import ControlbarStudent from "../../../../../components/ControlBar/ControlBar.student";
import InfoCustomer from "./InfoCustomer";

interface IStudentDetail {
  studentId: string
}

export default function CustomerInfo(props: IStudentDetail) {
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col md={8}>
           <InfoCustomer customerId={props.studentId}/>
          </Col>
          {/* <Col md={4}>
            <Row>
            <StatsStudents studentId={props.studentId}/>
            </Row>
            <Row className="mt-3">
              <ControlbarStudent studentId={props.studentId}/>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
