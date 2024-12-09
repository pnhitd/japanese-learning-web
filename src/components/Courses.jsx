import React from "react";
import coursesData from "../data/coursesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Courses = ({ filter = "all" }) => {

    const filteredCourses = coursesData.filter((course) => {
        if (filter === "completed") return course.status === "completed";
        if (filter === "not-learned") return course.status == "not-learned";
        if (filter === "in-progress") return course.status == "in-progress";
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
        {course.status === "completed" ? (
                <>
                  {/* Hình ảnh khóa học */}
                  <div className="relative">
                      {/* Overlay hiển thị khi hoàn thành */}
                      {course.status === "completed" && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-pink-300 font-bold text-xl border-2 border-pink-300 px-4 py-2 rounded-xl ">
                            Đã hoàn thành
                          </span>
                        </div>
                      )}
                      <img
                        src={course.image}
                        alt="Hình ảnh mô tả"
                        className="w-full h-[160px] object-cover"
                      />
                  </div>
                </>
              ) : course.status === "not-learned" ? (
                <>
                  <img
                    src={course.image}
                    alt="Hình ảnh mô tả"
                    className="w-full h-[160px] object-cover"
                  />
                </>
              ) : course.status === "in-progress" ? (
                <>
                  <div className="relative">
                      {/* Overlay hiển thị khi hoàn thành */}
                      {course.status === "in-progress" && (
                        <>
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-[#5A81FA] font-extrabold text-6xl">
                                {course.progress || 0}%
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 bg-[#5A81FA] h-2" style={{ width: `${course.progress}%` }}></div>
                        </>
                      )}
                      <img
                        src={course.image}
                        alt="Hình ảnh mô tả"
                        className="w-full h-[160px] object-cover"
                      />
                  </div>
                </>
              ) : null 
            }

  
        {/* Nội dung khóa học */}
        <div className="p-4">
          {/* Tiêu đề */}
          <h2 className="text-xl font-bold text-[#07152F]">{course.title}</h2>
          {/* Mô tả */}
          <div className="group relative">
                <p className="mt-2 text-sm text-gray-600 line-clamp-2 ">{course.description}</p>
                {/* Tooltip */}
                <span className="absolute top-0 left-0 w-[200px] bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                {course.description}
          </span>
          </div>
          {/* Nút hành động */}
          <div className="mt-4 flex gap-2">
              {/* Kiểm tra status */}
              {course.status === "completed" ? (
                <>
                  <Link to='/free-resources/main-vocab' className="w-full">
                      <button className="flex-1 py-2 w-full font-bold  text-sm  bg-[#F490AF] text-white rounded-md hover:bg-[#FF0854]">
                        Học lại
                      </button>
                  </Link>
                </>
              ) : course.status === "not-learned" ? (
                <>
                  <Link to="/free-resources/main-vocab" className="w-full">
                    <button className="flex-1 py-2 w-full text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Bắt đầu học
                    </button>
                  </Link>
                </>
              ) : course.status === "in-progress" ? (
                <>
                  <Link to="vocab" className="w-full">
                    <button className="flex-1 py-2 w-full text-sm font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Tiếp tục học
                    </button>
                  </Link>
                </>
              ) : null 
            }
            </div>
        </div>
      </motion.div>
      ))}
    </div>
  );
};

export default Courses;
