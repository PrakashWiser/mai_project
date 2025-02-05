import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/images/home-1.png';
import img2 from '../assets/images/home-2.png';
import img3 from '../assets/images/home-3.png';
import img4 from '../assets/images/home-4.png';
import MainLayout from '../Layout/MainLayout';

const cardData = [
    {
        id: 1,
        title: "Home Renovation",
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
        image: img1,
        budget: '₹100',
    },
    {
        id: 2,
        title: "Living Room",
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
        image: img2,
        budget: '₹100'
    },
    {
        id: 3,
        title: "Living Room Gardening",
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
        image: img3,
        budget: '₹100'
    },
    {
        id: 4,
        title: "Home Exterior",
        description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
        image: img4,
        budget: '₹100'
    },
];

function HomeSectionFive() {
    return (
        <MainLayout className='home_five'>
            <Container>
                <h2>PROJECTS</h2>
                <Row className="g-4">
                    {cardData.map((card) => (
                        <Col key={card.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="shadow border-0 h-100 position-relative">
                                <Card.Img variant="top" src={card.image} className="img-fluid" style={{ height: '180px', objectFit: 'cover' }} />
                                <Card.Title className='ps-3'>
                                    {card.title}
                                </Card.Title>
                                <Card.Body className="d-flex flex-column bg-mute">
                                    <Card.Text className="description flex-grow-1  p-1 rounded-3">{card.description}</Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <p>Budget:{card.budget}</p>
                                        <Button>View</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainLayout>
    );
}

export default HomeSectionFive;