import React from 'react'
import MainLayout from "../Layout/MainLayout";
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from "./Image";
import Homebanner from "../assets/images/banner-img.png";
function HomeSectionOne() {
    return (
        <MainLayout className="home_one">
            <Container>
                <Row className='align-items-center text-white font_serif'>
                    <Col md={7} className='py-3'>
                        <h1>Manage your project <span>FASTER</span></h1>
                        <Button variant="primary" size="lg">
                            Explore Your Project
                        </Button>
                    </Col>
                    <Col md={5}>
                        <Image className="img-fluid" link={Homebanner} alt="home-banner" />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default HomeSectionOne