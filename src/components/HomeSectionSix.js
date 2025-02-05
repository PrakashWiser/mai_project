import React from 'react'
import Card from 'react-bootstrap/Card';
import Home from '../assets/images/home-5.png'
import { Col, Container, Row } from 'react-bootstrap';
import MainLayout from '../Layout/MainLayout';
function HomeSectionSix() {
    const objeData = [
        {
            content: 'Safe measures can refer to a wide range of precautions'
        },
        {
            content: 'Safe measures can refer to a wide range of precautions'
        },
        {
            content: 'Safe measures can refer to a wide range of precautions'
        },
        {
            content: 'Safe measures can refer to a wide range of precautions'
        },
        
    ]
    return (
        <MainLayout className='home_six'>
            <Container>
                <h2 className='mt-4'>Blog</h2>
                <Row className="g-4">
                    {objeData.map((card) => (
                        <Col key={card.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="shadow border-0 h-100 bg-mute p-3">
                                <Card.Img variant="top" src={Home} className="img-fluid" style={{ height: '180px', objectFit: 'cover' }} />
                                <Card.Body className="d-flex flex-column bg-mute justify-content-center align-items-center">
                                    <Card.Text className="description flex-grow-1 p-2 w-75 text-center">{card.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainLayout>
    )
}

export default HomeSectionSix