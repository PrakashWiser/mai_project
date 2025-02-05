import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import client1 from "../assets/images/client-icon.png";
import client2 from "../assets/images/sub-client-2.png";
import client3 from "../assets/images/sub-client-3.png";
import client4 from "../assets/images/sub-client-4.png";

const objData = [
    { img: client1, name: "Jery Macson", role: "Intern" },
    { img: client2, name: " Johnson", role: "Intern" },
    { img: client3, name: "Michael ", role: "Intern" },
    { img: client4, name: "Sophia Wilson", role: "Intern" }
];

function HomeSectionFour() {
    return (
        <Container className="py-4">
            <h5 className=" mb-4">AVAILABLE INTERNS</h5>
            <Row className="justify-content-center">
                {objData.map((inter, index) => (
                    <Col key={index} xs={6} md={6} lg={3} className="d-flex justify-content-center">
                        <div className="intern-card">
                            <div className="top-banner"></div> {/* 🔵 Blue Section */}
                            <div className="image-container">
                                <img src={inter.img} alt={inter.name} className="profile-img" />
                            </div>
                            <div className='d-flex flex-column align-items-center text_primary'>
                                <div className="content">
                                    <p><strong>Name:</strong> {inter.name}</p>
                                    <p><strong>Role:</strong> {inter.role}</p>
                                </div>
                                <Button className="profile-btn ">View Profile</Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomeSectionFour;
