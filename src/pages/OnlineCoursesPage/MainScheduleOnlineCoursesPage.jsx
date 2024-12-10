import React, { useState } from "react";
import c1 from "../../assets/carouselImgs/c1.png";
import c2 from "../../assets/carouselImgs/c2.png";
import { Carousel, Button, Input, Flex } from "antd";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import gv from "../../assets/avatars/gv.png";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
  borderRadius: "10px",
};

const MainScheduleOnlineCoursesPage = () => {
  const [size, setSize] = useState("large");

  return (
    <div>
      <Carousel autoplay className="mt-4 mx-10">
        <div>
          <img style={contentStyle} src={c1} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={c2} alt="" />
        </div>
      </Carousel>

      <div className="mx-10 mt-6">
        <Link to="/online-courses/infor">
          <Button className="text-[16x] w-48" shape="round" size={size}>
            Thông tin khóa học
          </Button>
        </Link>
        <Link to="/online-courses/schedule">
          <Button
            className="ml-2 text-[16px] w-48"
            type="primary"
            shape="round"
            size={size}
          >
            Lịch học
          </Button>
        </Link>
        <Link to="/online-courses/study-path">
          <Button className="ml-2 text-[16px] w-48" shape="round" size={size}>
            Lộ trình học tập
          </Button>
        </Link>
        <Link to="/online-courses/commit">
          <Button className="ml-2 text-[16px] w-48" shape="round" size={size}>
            Cam kết khóa học
          </Button>
        </Link>
      </div>

      <div className="mx-20 my-10">
        <div className="text-center font-bold text-3xl leading-[48px]">
          Tiếng Nhật chuyên ngành
          <br />
          Công nghệ Thông Tin
        </div>
        <p className="text-center mt-2 leading-6 mx-20">
          Khám phá ngôn ngữ và văn hóa Nhật Bản hoàn toàn miễn phí với bộ tài
          liệu học tiếng Nhật trên trang web của chúng tôi. Tài liệu bao gồm từ
          vựng, ngữ pháp, kanji, nghe hiểu và đọc hiểu, giúp bạn tiến bộ mỗi
          ngày. Bắt đầu hành trình học tiếng Nhật của bạn ngay hôm nay!"
        </p>

        <Flex className="mx-[70px]">
          <div className="mt-4">
            <div className="bg-gv h-[300px] w-[300px] pt-[50px] rounded-t-xl">
              <img
                src={gv}
                alt=""
                className="w-[200px] h-[200px] rounded-full mx-auto my-auto"
              />
            </div>
            <div className="px-4 py-4 w-[300px] bg-white rounded-b-xl">
              <p className="text-[#4F4B45]">Giảng viên</p>
              <p className="text-lg">Đào Xuân Phương</p>
              <ul className="text-[#4F4B45] my-2 list-disc px-4 leading-6 text-justify">
                <li>JLPT N1</li>
                <li>Có kinh nghiệm giảng dạy JLPT 6 năm</li>
                <li>Tốt nghiệp Ngành Ngôn ngữ Nhật USSH</li>
                <li>Đã giúp hàng trăm học viên đạt N3 JLPT</li>
              </ul>
            </div>
          </div>

          <div className="w-[600px] bg-white mt-4 ml-[30px] text-[#4F4B45] h-[400px] rounded-xl">
            <div>
              <Flex className="justify-between px-4 pt-[50px] pb-4">
                <IoIosArrowBack className="w-4 h-4 my-auto" />
                <p className="font-bold text-lg">May 2022</p>
                <IoIosArrowBack className="w-4 h-4 my-auto rotate-180" />
              </Flex>
              <Flex className="justify-between px-8">
                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Sun</p>
                  <p>1</p>
                  <p>8</p>
                  <p>15</p>
                  <p>22</p>
                  <p>29</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Mon</p>
                  <p>2</p>
                  <p>9</p>
                  <p className="bg-[#444444] font-semibold rounded-full text-white">
                    16
                  </p>
                  <p>23</p>
                  <p>30</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Tue</p>
                  <p>3</p>
                  <p>10</p>
                  <p>17</p>
                  <p>24</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Wed</p>
                  <p>4</p>
                  <p>11</p>
                  <p>18</p>
                  <p>25</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Thu</p>
                  <p>5</p>
                  <p>12</p>
                  <p>19</p>
                  <p>26</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Fri</p>
                  <p>6</p>
                  <p>13</p>
                  <p>20</p>
                  <p>27</p>
                </div>

                <div className="text-center leading-[28px]">
                  <p className="my-2 font-bold">Sat</p>
                  <p>7</p>
                  <p>14</p>
                  <p>21</p>
                  <p>28</p>
                </div>
              </Flex>
            </div>
            <button className="mt-[180px] mx-[250px] bg-[#2B308B] text-white rounded-lg font-semibold py-2 px-4">
              Mua ngay
            </button>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default MainScheduleOnlineCoursesPage;
