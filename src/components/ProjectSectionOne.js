import React from "react";
import hall from "../assets/images/hall-room.png";
import MainLayout from "../Layout/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "./Image";
const objData = [
  {
    name: "Kitchen Worktop",
    img: hall,
    Description:
      "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
  },
  {
    name: "Kitchen Worktop",
    img: hall,
    Description:
      "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
  },
  {
    name: "Kitchen Worktop",
    img: hall,
    Description:
      "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
  },
  {
    name: "Kitchen Worktop",
    img: hall,
    Description:
      "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
  },
];

function ProjectSectionOne() {
  return (
    <MainLayout className="project_three">
      <Container>
        <Row className="align-items-center">
          {objData.map((item, index) => (
            <>
              <Col lg={4}>
                <Image
                  link={item.img}
                  alt={item.name}
                  className="img-fluid my-3"
                />
              </Col>
              <Col lg={8} className="my-3">
                <div className="text-end">
                  <span className="text-end bg_yellow p-2 fw700">
                    Interns : 0
                  </span>
                </div>
                <h5 className="fw700">{item.name}</h5>
                <div className="d-flex justify-content-between">
                  <span className="d-flex gap-4">
                    <div className="border px-2">Kitchen</div>
                    <div className="border px-2">Splashback</div>
                  </span>
                  <span>
                    <div>Posted 07/08/24</div>
                  </span>
                </div>
                <Row>
                  <Col xs={4}>
                    <ul>
                      <li>Project ID : MAIID123</li>
                      <li>Bristol - England</li>
                      <li>Duration : completed</li>
                    </ul>
                  </Col>
                  <Col xs={8}>
                    <ul>
                      <li>Price - Fixed</li>
                      <li>Expiry Date - Marble</li>
                    </ul>
                  </Col>
                  <div className="d-flex  justify-content-center">
                    <hr className="underline" />
                  </div>
                </Row>
                <div className="d-flex  justify-content-between fw700 time_duration">
                  <span>Project Status : Active</span>
                  <span>Last Update: 2024-08-12</span>
                  <span>Proposal : 23</span>
                </div>
                <h4>Description</h4>
                <p>{item.Description}</p>
                <div className="d-flex  justify-content-between  btn_groubs">
                  <Button variant="primary" className="py-3 px-5">
                    View
                  </Button>
                  <Button variant="success">Send a Proposal</Button>
                  <Button variant="info">Apply Internship</Button>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}

export default ProjectSectionOne;
