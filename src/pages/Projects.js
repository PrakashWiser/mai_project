import React from "react";
import banner from "../assets/images/project-banner.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "../Layout/MainLayout";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "../components/Image";
import icon from "../assets/images/project-icon.png";
import { FaArrowDown } from "react-icons/fa";
import ProjectSectionOne from "../components/ProjectSectionOne";
function Project() {
  const sectionStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
  };

  return (
    <>
      <MainLayout>
        <div
          style={sectionStyle}
          className="d-flex align-items-end project_banner text-white"
        >
          <Container>
            <p>
              Post your projects with specifications and details explaining the
              depth of the project, materials needed, time limit to be taken,
              and budget.
            </p>
          </Container>
        </div>
      </MainLayout>
      <MainLayout className="project_two my-3">
        <Container>
          <h4 className="fw700">Project List</h4>
          <Row className="align-items-center">
            <Col lg={9}>
              <div className="position-relative w-100 border">
                <AiOutlineSearch
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  size={20}
                  style={{ color: "gray" }}
                />
                <input
                  className="w-75 border-0 pe-5 py-3 ps-3"
                  placeholder="Search"
                  style={{ outline: "none" }}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex">
                <Image link={icon}  />
                <button
                  className="btn d-flex align-items-center justify-content-center gap-3 py-3 fw700 text_primary"
                  style={{
                    backgroundColor: "#F5F5F5",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontSize: "22px",
                    lineHeight: "27px",
                    color:"#000000"
                  }}
                >
                  Sort by
                 <span className="down_arrow"> 
                 <FaArrowDown  size={18} style={{ color: "#333" }} />
                 </span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </MainLayout>
      <ProjectSectionOne/>
    </>
  );
}

export default Project;
