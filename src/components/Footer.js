import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='pt-3'>
                    <Col xxl={7}>
                        <ul className='d-md-flex gap-md-3 '>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Contact us</li>
                            <h5>
                                All copyrights Reserved @MAI
                            </h5>
                        </ul>

                    </Col>
                    <Col xxl={5}>
                        <div className='d-md-flex social_nextwork align-items-center'>
                            <p className='d-none d-xxl-block'>Social networks :</p>
                            <ul>
                                <li className='d-flex gap-3 ps-lg-3'>
                                    <SlSocialFacebook />
                                    <TfiTwitter />
                                    <FaGoogle />
                                    <FaInstagram />
                                    <FiLinkedin />
                                    <SiWhatsapp />
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer