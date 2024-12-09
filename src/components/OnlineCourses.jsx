import React from "react";
import { Card, Button } from "antd";
import onlineCourseData from "../data/onlineCourseData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OnlineCourses = ({ filter = "all" }) => {
  const filteredCourses = onlineCourseData.filter((course) => {
    if (filter === "bought") return course.status === "bought";
    if (filter === "not bought") return course.status == "not bought";
    return true; // Hiển thị tất cả
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      {filteredCourses.map((course, index) => (
        <motion.div
          className="w-[260px] h-[327px] bg-white rounded-3xl shadow-lg overflow-hidden"
          whileHover={{
            scale: 1.05, // Tăng kích thước phần tử
            transition: {
              duration: 0.2, // Hiệu ứng mượt
              ease: "easeOut",
            },
          }}
        >
          {/* Hình ảnh khóa học */}
          <img
            src={course.image}
            alt="Hình ảnh mô tả"
            className="w-full h-[160px] object-cover"
          />

          {/* Nội dung khóa học */}
          <div className="p-4">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold text-[#07152F]">{course.title}</h2>
            {/* Mô tả */}
            <div className="group relative">
              <p className="mt-2 text-sm text-gray-600 line-clamp-2 ">
                {course.description}
              </p>
              {/* Tooltip */}
              <span className="absolute top-0 left-0 w-[200px] bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                {course.description}
              </span>
            </div>
            {/* Nút hành động */}
            <div className="mt-4 flex gap-2">
              {/* Kiểm tra status */}
              {course.status === "bought" ? (
                <>
                  <Link to="/online-courses/infor">
                    <button className="flex-1 py-2 w-28 text-sm font-medium border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100">
                      Chi tiết
                    </button>
                  </Link>
                  <Link to="/online-courses/infor">
                    <button className="flex-1 py-2 w-28 text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Vào học
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/cart-information">
                    <button className="flex-1 py-2 w-28 text-sm font-medium border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100">
                      Mua ngay
                    </button>
                  </Link>
                  <Link to="/online-courses/infor">
                    <button className="flex-1 py-2 w-28 text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Xem chi tiết
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OnlineCourses;
