import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "../components/Image";
import img from "../assets/images/signup-img.png";

function Blog() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <MainLayout className="my-lg-4 signup_form">
      <Container>
        <Row>
          <Col lg={6} className="d-flex ">
            <Image link={img} className="img-fluid  opacity-50 img_fuild"  />
          </Col>
          <Col lg={6}>
            <ul
              style={{
                backgroundColor: "#DBE7F1 ",
                listStyle: "inherit",
                fontSize: "17px",
              }}
              className="p-5 rounded"
            >
              <li>
                <strong>Precision is key!</strong> Customers who provide clear
                descriptions get optimal proposals for easy project completion.
              </li>
              <li>
                To make it better, we suggest you upload relevant pictures,
                documents, or specifications for clarity.
              </li>
            </ul>
            <div
              className="text-center p-3 my-3 text_primary"
              style={{ backgroundColor: "#DBE7F1 " ,fontSize:"33px", fontWeight:"700"}}
            >
              Post a Project
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select className="p-3">
                  <option>Select Options</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sub-Category</Form.Label>
                <Form.Select className="p-3">
                  <option>Select Options</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type your Project title"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type here..."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Upload Sample or Other Helpful Files</Form.Label>
                <div className="border p-3 text-center">
                  <span>
                    Drag here or <a href="#">Browse</a>
                  </span>
                  <p className="text-muted">Formats: JPG, PNG, PDF</p>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Budget Type</Form.Label>
                <div className="d-flex gap-2">
                  <Button variant="dark">Fixed</Button>
                  <Button variant="secondary">Range</Button>
                  <Button variant="light">No Idea</Button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Project Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search for your location"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Post Code</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={6}
                  placeholder="Enter Post Code"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Duration Days</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I Agree the Terms & Conditions"
                />
              </Form.Group>

              <div className="d-flex gap-3">
                <Button variant="success">Post a Project</Button>
                <Button variant="danger">Cancel</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Blog;
