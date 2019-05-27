import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import H1 from "../../components/H1";

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Container>
          <H1>Create Cleaning Object</H1>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control   />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Container>
      </Row>
    );
  }
}

export default Admin;
