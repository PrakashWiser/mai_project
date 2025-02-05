import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import MainLayout from "../Layout/MainLayout";
import { Button, Container } from "react-bootstrap";
import Image from "./Image";
import File from "../assets/images/file.png";
import Client from "../assets/images/client-icon.png";
import Livingone from "../assets/images/living-room.jpeg";
import Livingtwo from "../assets/images/living-room-2.jpeg";
import Livingthree from "../assets/images/living-room-3.jpeg";
import Livingfour from "../assets/images/living-room-4.jpeg";
import Livingfive from "../assets/images/living-room-5.jpeg";
import Livingsix from "../assets/images/living-room-6.jpeg";
import Livingseven from "../assets/images/living-room-7.jpeg";
import Card from "react-bootstrap/Card";

function HomeSectionTwo() {
  const scrollRef = useRef(null);
  const objData = [
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingone,
      work: "Progress",
      name: "Interior Works",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingtwo,
      work: "Progress",
      name: "Stone Fixing",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingthree,
      work: "Progress",
      name: "Electrical Works",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingfour,
      work: "Progress",
      name: "Gardening Setup",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingfive,
      work: "Progress",
      name: "Kitchen Renovation",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingsix,
      work: "Progress",
      name: "Gardening Setup",
    },
    {
      icon: <FaLocationDot />,
      city: "England",
      client: Client,
      image: Livingseven,
      work: "Progress",
      name: "Kitchen Renovation",
    },
  ];
  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <MainLayout className="home_two shadow">
      <Container>
        <div className="d-xxl-flex justify-content-evenly my-4 align-items-center">
          <h4 className="text_primary">LIVE PROJECT</h4>
          <input
            type="text"
            placeholder="Search Your Live Project"
            className="rounded pe-5 ps-4 py-3"
          />
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              type="text"
              placeholder="Search For Your Location"
              className="rounded pe-5 ps-4 py-3 input_two ms-xl-5 ms-xxl-0 mt-4 mt-xxl-0"
              style={{
                paddingRight: "40px",
                borderRadius: "8px",
              }}
            />
            <Image
              link={File}
              className="pt-4 pt-xxl-0"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </Container>
      <div className="living_room" ref={scrollRef}>
        {objData.map((items, index) => (
          <Card key={index} className="custom_card">
            <div className="image_container">
              <Card.Img variant="top" src={items.image} className="card_img" />
              <Image link={items.client} className="client_img" />
            </div>
            <Card.Body>
              <div className="d-flex align-items-center gap-2 client_parent text_primary">
                <div>{items.icon}</div>
                <Card.Title className="client_city">{items.city}</Card.Title>
              </div>
              <Card.Text className="text-end text-primary pe-4 ">
                {items.work}
              </Card.Text>
              <Card.Text className="text-center text_primary client_name pb-3">
                {items.name}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="text-end btn_view">
        <Button
          onClick={handleScroll}
          className=" mb-2 my-lg-3 border-0 bg-white text-primary fw700"
        >
          View All
        </Button>
      </div>
    </MainLayout>
  );
}

export default HomeSectionTwo;
