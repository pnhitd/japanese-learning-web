import React from "react";
import ava from "../assets/avatars/ava2.png";
import { GrFormNextLink } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { Flex, Progress } from "antd";
import { GoDotFill } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { CiHeart, CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import SuggestCourses from "../components/SuggestCourses";

const Dashboard = () => {
  return (
    <div className="mb-10">
      <div className="mx-10">
        <h1 className="text-3xl font-bold">Bảng điều khiển</h1>
        <div className="relative mt-4 mr-4">
          <div className="bg-[#F7E5E9] rounded-lg py-4 px-10">
            <p className="text-[#2B308B] font-bold text-lg">
              Welcome back Trần Nhật Trường!
            </p>
            <p className="max-w-[400px] mt-2 leading-6">
              Bạn đã hoàn thành 80% mục tiêu tuần này, giữ phong độ và nâng cao
              tiếng Nhật của bạn!
            </p>
          </div>
          <img
            src={ava}
            alt=""
            className="absolute -top-4 -right-4 rounded-full size-[150px]"
          />
        </div>
      </div>

      <div className="m-10 flex justify-around">
        <div className="m-2">
          <div className="flex justify-between mb-10">
            <p className="font-semibold text-xl">Hoạt động gần đây</p>
            <div className="flex my-auto">
              <p>Xem thêm</p>
              <GrFormNextLink className="ml-2 w-5 h-5" />
            </div>
          </div>

          <div className="flex justify-between border-b-2 border-b-[#DCDCE5] mb-4 pb-4">
            <p className="mr-8">
              <span className="font-semibold">Bài 1</span> - Khởi đầu
            </p>
            <Flex vertical gap="middle">
              <Flex
                vertical
                gap="small"
                style={{
                  width: 300,
                }}
              >
                <Progress percent={50} strokeColor="#000000" />
              </Flex>
            </Flex>
          </div>

          <div className="flex justify-between border-b-2 border-b-[#DCDCE5] mb-4 pb-4">
            <p className="mr-8">
              <span className="font-semibold">Bài 2</span> - Bảng chữ cái
            </p>
            <Flex vertical gap="middle">
              <Flex
                vertical
                gap="small"
                style={{
                  width: 300,
                }}
              >
                <Progress percent={20} strokeColor="#FD6C75" />
              </Flex>
            </Flex>
          </div>

          <div className="flex justify-between border-b-2 border-b-[#DCDCE5] mb-4 pb-4">
            <p className="mr-8">
              <span className="font-semibold">Bài 3</span> - Xin chào
            </p>
            <Flex vertical gap="middle">
              <Flex
                vertical
                gap="small"
                style={{
                  width: 300,
                }}
              >
                <Progress percent={39} strokeColor="#5E81F4" />
              </Flex>
            </Flex>
          </div>

          <div className="flex justify-between border-b-2 border-b-[#DCDCE5] mb-4 pb-4">
            <p className="mr-8">
              <span className="font-semibold">Bài 4</span> - Khởi đầu
            </p>
            <Flex vertical gap="middle">
              <Flex
                vertical
                gap="small"
                style={{
                  width: 300,
                }}
              >
                <Progress percent={88} strokeColor="#4D4CAC" />
              </Flex>
            </Flex>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Thống kê thời gian học tập</p>
            <div className="flex">
              <p className="flex my-auto">Tuần trước</p>
              <FaChevronDown className="w-4 h-4 ml-2 my-auto" />
            </div>
          </div>

          <div className="mt-20">
            <Flex wrap className="justify-between gap-10">
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={75}
                strokeColor="#FD6C75"
              />
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={35}
                strokeColor="#4D4CAC"
              />
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={65}
                strokeColor="#5E81F4"
              />
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={25}
                strokeColor="#000000"
              />
            </Flex>

            <Flex className="justify-evenly gap-8 mt-10">
              <div className="flex">
                <GoDotFill className="text-[#FD6C75] w-8 h-8" />
                <p className="my-auto">Từ vựng</p>
              </div>

              <div className="flex">
                <GoDotFill className="text-[#4D4CAC] w-8 h-8" />
                <p className="my-auto">Ngữ pháp</p>
              </div>

              <div className="flex">
                <GoDotFill className="text-[#5E81F4] w-8 h-8" />
                <p className="my-auto">Nghe hiểu</p>
              </div>

              <div className="flex">
                <GoDotFill className="text-[#000000] w-8 h-8" />
                <p className="my-auto">Đọc hiểu</p>
              </div>
            </Flex>
          </div>
        </div>
      </div>

      <div className="flex bg-[#F2F4FF] justify-evenly">
        <div className="w-[50%] mt-10">
          <div className="flex justify-between text-[25px] font-semibold text-[#12084E]">
            <p className="font-semibold text-xl">Lịch học hôm nay</p>
            <div className="flex">
              <p className="font-semibold text-xl">07, tháng 6, 2024</p>
              <IoChevronBackCircleOutline className="w-6 h-6 my-auto ml-2" />
              <IoChevronBackCircleOutline className="rotate-180 w-6 h-6 my-auto ml-1" />
            </div>
          </div>

          <div className="flex gap-4 border-gray-200 border-2 rounded-lg p-2 justify-between mt-4 shadow-lg bg-white">
            <MdNavigateNext className="rotate-180 w-6 h-6 my-auto" />

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className="text-center">
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <MdNavigateNext className="w-6 h-6 my-auto" />
          </div>

          <div className="border-gray-200 border-2 rounded-lg p-2 mt-4 shadow-lg bg-white">
            <h4 className="font-bold text-lg">Buổi học trong ngày</h4>
            <div className="flex mt-4 ml-3">
              <div className="text-lg font-semibold my-auto">
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className="my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]">
                <h5 className="text-lg font-semibold">Sửa đề JLPT N3 - Đề 2</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className="my-auto ml-4">
                <h5 className="text-lg font-semibold text-[#58CC02]">
                  Đang diễn ra
                </h5>
              </div>
            </div>

            <div className="flex mt-4 ml-3">
              <div className="text-lg font-semibold my-auto">
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className="my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]">
                <h5 className="text-lg font-semibold">Sửa đề JLPT N3 - Đề 3</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className="my-auto ml-4">
                <FiCheckCircle className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                <h5 className="text-lg font-semibold text-gray-400">
                  Sắp diễn ra
                </h5>
              </div>
            </div>

            <div className="flex mt-4 ml-3">
              <div className="text-lg font-semibold my-auto">
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className="my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]">
                <h5 className="text-lg font-semibold">Sửa đề JLPT N3 - Đề 3</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className="my-auto ml-4">
                <FiCheckCircle className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                <h5 className="text-lg font-semibold text-gray-400">
                  Sắp diễn ra
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-16 mt-10">
          <Link to="/account/scheduler/month">
            <div className="flex">
              <CiHeart className="w-6 h-6 my-auto" />
              <h3 className="ml-2 font-semibold text-lg">
                Xem lịch học trong tuần{" "}
              </h3>
            </div>
          </Link>

          <div className="flex mt-4">
            <CiCirclePlus className="w-6 h-6 my-auto" />
            <h3 className="ml-2 font-semibold text-lg">Thêm lịch trình mới </h3>
          </div>

          <h2 className="font-semibold text-lg mt-8">Bài tập cần làm</h2>

          <div className="flex bg-[#2B308B] py-4 rounded-xl mt-2">
            <div className="my-auto text-3xl font-bold text-[#F490AF] ml-4">
              01
            </div>
            <div className="ml-4 text-white">
              <h3 className="font-semibold text-xl">Làm bài test Kanji</h3>
              <p className="mt-1">Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className="flex bg-[#2B308B] py-4 rounded-xl mt-2">
            <div className="my-auto text-3xl font-bold text-[#F490AF] ml-4">
              02
            </div>
            <div className="ml-4 text-white">
              <h3 className="font-semibold text-xl">Làm bài test Kanji</h3>
              <p className="mt-1">Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className="flex bg-[#2B308B] py-4 rounded-xl mt-2">
            <div className="my-auto text-3xl font-bold text-[#F490AF] ml-4">
              03
            </div>
            <div className="ml-4 text-white">
              <h3 className="font-semibold text-xl">Làm bài test Kanji</h3>
              <p className="mt-1">Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-xl py-4 px-4 my-4 bg-white">
            <h3 className="font-semibold text-[#2B308B]">
              Lịch trình trong ngày
            </h3>
            <div className="flex mt-2">
              <p className="text-[rgba(43,48,139,0.7)] font-semibold">
                2pm ~ 3pm{" "}
              </p>
              <GoDotFill className="my-auto w-6 h-6 text-[#F490AF]" />
              <p className="text-[#2B308B] font-semibold">
                Luyện nói Sakubun 褒められたこと
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-20">
        <p className="font-semibold text-xl mb-4">Khóa học của bạn</p>
        <SuggestCourses />
      </div>
    </div>
  );
};

export default Dashboard;
