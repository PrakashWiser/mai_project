import React from 'react';
import MainLayout from '../Layout/MainLayout';
import { Container, Row, Col } from 'react-bootstrap';
import room from "../assets/images/room-outdoor.png";
import client from "../assets/images/clients-2.png";
import { FaShareAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from "./Image";

const objData = [
    {
        product: "Bedroom Renovation",
        img: room,
        name: "Kitchen Worktop",
        city: "Bristol - England",
        category: "Slab - Marble",
        duration: "Duration : completed",
        clients: client,
        shareIcon: <FaShareAlt />,
    },
    {
        product: "Bedroom Renovation",
        img: room,
        name: "Kitchen Worktop",
        city: "Bristol - England",
        category: "Slab - Marble",
        duration: "Duration : completed",
        clients: client,
        shareIcon: <FaShareAlt />,
    },
    {
        product: "Bedroom Renovation",
        img: room,
        name: "Kitchen Worktop",
        city: "Bristol - England",
        category: "Slab - Marble",
        duration: "Duration : completed",
        clients: client,
        shareIcon: <FaShareAlt />,
    },
    {
        product: "Bedroom Renovation",
        img: room,
        name: "Kitchen Worktop",
        city: "Bristol - England",
        category: "Slab - Marble",
        duration: "Duration : completed",
        clients: client,
        shareIcon: <FaShareAlt />,
    }
];

function HomeSectionThree() {
    return (
        <MainLayout className="home_three my-3">
            <Container>
                <h3>Recent Project Posts</h3>
                <Row>
                    {objData.map((item, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} xl={3} className="mb-3">
                            <h5 className="fw700">{item.product}</h5>
                            <Card style={{ width: "100%" }}> {/* Ensures full column width */}
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body className="border border-1">
                                    <div className="d-flex gap-2">
                                        <Card.Title>{item.name}</Card.Title>
                                        <div>{item.shareIcon}</div>
                                    </div>
                                    <Card.Text>
                                        {item.city}
                                        <br />
                                        {item.category}
                                        <br />
                                        <ul className="d-flex align-items-center gap-2">
                                            <li>{item.duration}</li>
                                            <li>
                                                <Image link={item.clients} />
                                            </li>
                                            <li>9+</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button
                                    variant="primary"
                                    className="w-100 border-0 p-2 p-lg-3"
                                    style={{ backgroundColor: "#003F6B", borderRadius: "0 0 10px 10px" }}
                                >
                                    View  Projects
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainLayout>
    );
}

export default HomeSectionThree;
