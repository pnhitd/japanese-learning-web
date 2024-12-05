import React from "react";
import { Carousel, Button } from "antd";
import heroImgsData from "../data/heroImgsData";

const HomePage = () => {
  return (
    <div>
      <Carousel autoplay>
        {heroImgsData.map((item) => (
          <div key={item.id}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                flexDirection: "column",
                padding: "0 20px",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {item.title}
              </h1>
              <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
                {item.desc}
              </p>
              <Button type="primary" size="large" style={{ marginTop: "1rem" }}>
                Bắt đầu học
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
