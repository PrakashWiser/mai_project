import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Images from '../components/Image';
import contact from '../assets/images/contact.png';
import MainLayout from '../Layout/MainLayout';

function HomeSectionSeven() {
    return (
        <MainLayout className="home_seven py-5">
            <Container>
                <h3>Enquiry Now</h3>
                <Row className="align-items-center justify-content-center">
                    <Col md={6} className="text-center">
                        <div className="contact-image-container">
                            <Images link={contact} className="img-fluid contact-image" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-form-container bg-light p-4 rounded shadow-sm">
                            <Form>
                                <Form.Group className="mb-3 mt-5">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile Number*</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter your mobile number" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email ID*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Site Location*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter site location" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Get a Quote
                                </Button>
                                <p className="text-muted text-center mt-2">We'll get back to you</p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
}

export default HomeSectionSeven;