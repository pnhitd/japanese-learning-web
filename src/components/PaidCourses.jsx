import React from "react";
import paidCoursesData from "../data/paidCoursesData";
import { LockFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PaidCourses = ({ filter = "all" }) => {
  const filteredCourses = paidCoursesData.filter((course) => {
    if (filter === "completed") return course.status === "completed";
    if (filter === "not-learned") return course.status === "not-learned";
    if (filter === "in-progress") return course.status === "in-progress";
    return true;
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      {filteredCourses.map((course, index) => (
        <motion.div
          key={index}
          className="w-[260px] h-[327px] bg-white rounded-3xl shadow-lg overflow-hidden"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div className="relative">
            {/* Hiển thị overlay theo trạng thái */}
            {course.status === "completed" && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-pink-300 font-bold text-xl border-2 border-pink-300 px-4 py-2 rounded-xl">
                  Đã hoàn thành
                </span>
              </div>
            )}
            {course.status === "in-progress" && (
              <>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-[#5A81FA] font-extrabold text-6xl">
                    {course.progress || 0}%
                  </span>
                </div>
                <div
                  className="absolute bottom-0 left-0 bg-[#5A81FA] h-2"
                  style={{ width: `${course.progress || 0}%` }}
                />
              </>
            )}
            {course.status === "not-paid" && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <LockFilled style={{ fontSize: "36px", color: "#fff" }} />
              </div>
            )}
            <img
              src={course.image}
              alt="Hình ảnh mô tả"
              className="w-full h-[160px] object-cover"
            />
          </div>

          {/* Nội dung */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#07152F]">{course.title}</h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {course.description}
            </p>
            <div className="mt-4 flex gap-2">
              {course.status === "completed" && (
                <Link to="/paid-resources/main-vocab-paid" className="w-full">
                  <button className="flex-1 py-2 w-full font-bold text-sm bg-[#F490AF] text-white rounded-md hover:bg-[#FF0854]">
                    Học lại
                  </button>
                </Link>
              )}
              {course.status === "not-learned" && (
                <Link to="/paid-resources/main-vocab-paid" className="w-full">
                  <button className="flex-1 py-2 w-full text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                    Bắt đầu học
                  </button>
                </Link>
              )}
              {course.status === "in-progress" && (
                <Link to="/paid-resources/main-vocab-paid" className="w-full">
                  <button className="flex-1 py-2 w-full text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                    Tiếp tục học
                  </button>
                </Link>
              )}
              {course.status === "not-paid" && (
                <>
                  <Link to="/cart-information">
                    <button className="flex-1 py-2 w-28 text-sm font-medium border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100">
                      Mua ngay
                    </button>
                  </Link>
                  <Link to="/paid-resources/main-vocab-paid">
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

export default PaidCourses;
