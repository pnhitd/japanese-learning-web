import React from "react";
import { Card, Button } from "antd";
import coursesData from "../data/coursesData";
import { Link } from "react-router-dom";

const SuggestCourses = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {coursesData.map((course, index) => (
        <Card
          key={index}
          hoverable
          style={{
            width: 270,
            height: 360,
            marginBottom: "20px",
            borderRadius: "10px",
          }}
          cover={<img alt="" src={course.image} />}
        >
          <div>
            <h2 className="font-bold text-xl">{course.title}</h2>
            <div className="mt-2 leading-6">{course.description}</div>
            <Link to="/free-resources/main-vocab">
              <Button
                className="mt-2 w-[100%] py-5 bg-[#2B308B] text-lg font-semibold"
                type="primary"
              >
                Bắt đầu học
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SuggestCourses;
