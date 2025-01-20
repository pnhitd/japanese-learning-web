import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel, Button, Flex } from "antd";
import heroImgsData from "../data/heroImgsData";
import i6 from "../assets/heroImgs/6.png";
import i7 from "../assets/heroImgs/7.png";
import i8 from "../assets/heroImgs/8.png";
import { GrFormNextLink } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import i9 from "../assets/heroImgs/9.png";
import i10 from "../assets/heroImgs/10.png";
import i11 from "../assets/heroImgs/11.png";
import i12 from "../assets/heroImgs/12.png";
import i13 from "../assets/heroImgs/13.png";
import i14 from "../assets/heroImgs/14.jpg";
import i15 from "../assets/heroImgs/15.jpg";
import i16 from "../assets/heroImgs/16.jpg";
import i17 from "../assets/heroImgs/17.jpg";
import i18 from "../assets/heroImgs/18.jpg";
import i19 from "../assets/heroImgs/19.jpg";
import i20 from "../assets/heroImgs/20.jpg";
import i21 from "../assets/heroImgs/21.jpg";
import { useNavigate } from "react-router-dom";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [i9, i10, i11, i12, i13];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  const purposes = [
    {
      id: 1,
      name: "Sứ mệnh",
      desc: "Chúng tôi không ngừng đổi mới chương trình đào tạo để nâng cao chất lượng giảng dạy tiếng Nhật, đặc biệt trong phát âm, giúp học viên tiến bộ nhanh chóng.",
      img: i18,
    },
    {
      id: 2,
      name: "Mục tiêu",
      desc: "Mục tiêu của chúng tôi là tạo dựng cộng đồng học viên năng động, khuyến khích trao đổi văn hóa và ngôn ngữ giữa các quốc gia.",
      img: i19,
    },
    {
      id: 3,
      name: "Đa dạng",
      desc: "Chúng tôi cung cấp tài liệu học phong phú như video, bài tập tương tác và bài viết văn hóa, phù hợp mọi trình độ, từ cơ bản đến nâng cao.",
      img: i20,
    },
    {
      id: 4,
      name: "Tiện lợi",
      desc: "Website mang lại sự tiện lợi khi học viên có thể truy cập tài liệu mọi lúc, mọi nơi, với hệ thống bài học và giao diện thân thiện, dễ sử dụng.",
      img: i21,
    },
  ];

  return (
    <div className="bg-white">
      <Carousel autoplay arrows={true}>
        {heroImgsData.map((heroImg) => (
          <div
            key={heroImg.id}
            className="relative h-[90vh] w-full flex items-center justify-center"
          >
            <img
              src={heroImg.img}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00000099] flex items-end ">
              <div className="text-white px-8 mb-[100px] ">
                <h1 className="text-5xl font-bold ">{heroImg.title}</h1>
                <p className="text-xl mt-4 leading-10 text-justify  w-[900px]">{heroImg.desc}</p>
                <Button className="mt-4 h-10 text-lg font-semibold" type="primary" onClick={handleClick}>
                  Bắt đầu học
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div id="about" className="px-[300px] mt-10">
        <p className="font-bold text-3xl mb-4">Về chúng tôi</p>
        <Flex gap="large" className="mt-2">
          <div className="w-[50%] p-8 hover:border-4 border-black">
            <p className="text-xl font-semibold my-2">Sứ mệnh</p>
            <p className="text-justify leading-8">
              Cung cấp tài liệu học tiếng Nhật, từ vựng, ngữ pháp, bài tập và
              các khóa học trực tuyến cho người học ở mọi trình độ. Điều này
              giúp người học tiếng Nhật cải thiện kỹ năng ngôn ngữ và đạt được
              mục tiêu học tập của mình.
            </p>
          </div>
          <div className="w-[50%] p-8 hover:border-4 border-black">
            <p className="text-xl font-semibold my-2">Đa dạng</p>
            <p className="text-justify leading-8">
              Các khóa học trực tuyến từ cơ bản đến nâng cao, bài giảng video,
              và các ứng dụng học tiếng Nhật. Bên cạnh đó, website còn giới
              thiệu văn hóa, lịch sử, và phong tục tập quán của Nhật Bản.
            </p>
          </div>
          <div className="w-[50%] p-8 hover:border-4 border-black">
            <p className="text-xl font-semibold my-2">Tiện lợi</p>
            <p className="text-justify leading-8">
              Website Sakura mang lại nhiều sự tiện lợi cho người học, từ việc
              tiết kiệm thời gian đến khả năng truy cập các tài nguyên học tập
              phong phú.
            </p>
          </div>
        </Flex>
      </div>

      <div id="courses" className="mt-10 py-10 bg-[#F2F4FF] px-[300px]">
        <p className="font-bold text-3xl mb-4">Khóa học mới</p>
        <Flex>
          <div>


          <div className="bg-white">
            <img src={i6} alt="" className="w-[500px]" />
            <p className="px-10 py-4 font-semibold text-lg">GIAO TIẾP CƠ BẢN</p>
            <p className="px-10 leading-6">
              Khóa học giúp bạn có thể tự tin giao tiếp trong các tình huống
              hàng ngày.
            </p>
            <div
              className="flex mx-10 mt-[115px] hover:text-[#1477f9]"
              onClick={handleClick}
            >
              <p className="font-semibold cursor-pointer">MUA NGAY</p>
              <GrFormNextLink className="w-5 h-5 my-auto" />
            </div>
          </div>
          <div className="bg-white">
            <img src={i6} alt="" className="w-[500px]" />
            <p className="px-10 py-4 font-semibold text-lg">GIAO TIẾP CƠ BẢN</p>
            <p className="px-10 leading-6">
              Khóa học giúp bạn có thể tự tin giao tiếp trong các tình huống
              hàng ngày.
            </p>
            <div
              className="flex mx-10 mt-[115px] hover:text-[#1477f9]"
              onClick={handleClick}
            >
              <p className="font-semibold cursor-pointer">MUA NGAY</p>
              <GrFormNextLink className="w-5 h-5 my-auto" />
            </div>
          </div>
          </div>
          
          <div className="ml-4">
            <Flex className="bg-white">
              <div className="mx-10 my-4">
                <p className="pl-2 py-2 font-semibold text-lg">
                  NGỮ PHÁP NÂNG CAO
                </p>
                <p className="pl-2 leading-6">
                  Khóa học giúp bạn nắm vững ngữ pháp và sử dụng linh hoạt trong
                  giao tiếp.
                </p>
                <div
                  className="flex ml-2 mt-[80px] cursor-pointer hover:text-[#1477f9]"
                  onClick={handleClick}
                >
                  <p className="font-semibold ">MUA NGAY</p>
                  <GrFormNextLink className="w-5 h-5 my-auto" />
                </div>
              </div>
              <img src={i7} alt="" className="w-[300px] h-[250px]" />
            </Flex>
            <div className="bg-white mt-4">
              <Flex>
                <div className="mx-10 my-4">
                  <p className="pl-2 py-2 font-semibold text-lg">
                    NGỮ PHÁP NÂNG CAO
                  </p>
                  <p className="pl-2 leading-6">
                    Khóa học giúp bạn nắm vững ngữ pháp và sử dụng linh hoạt
                    trong giao tiếp.
                  </p>
                  <div
                    className="flex ml-2 mt-[80px] cursor-pointer hover:text-[#1477f9]"
                    onClick={handleClick}
                  >
                    <p className="font-semibold">MUA NGAY</p>
                    <GrFormNextLink className="w-5 h-5 my-auto" />
                  </div>
                </div>
                <img src={i8} alt="" className="w-[300px] h-[250px]" />
              </Flex>
            </div>
          </div>
        </Flex>
      </div>

      <div id="documents" className="mt-10 z-20">
        <p className="font-bold text-3xl mb-4 text-center">Tài liệu học tập</p>
        <Flex className="items-center justify-between">
          <MdNavigateNext
            className="w-16 h-16 cursor-pointer ml-10 rotate-180"
            onClick={handleBack}
          />
          <div className="flex items-center flex-col justify-center h-screen -my-[100px]">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={image}
                className="rounded-[12px]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: "20%", position: "absolute" }}
              />
            ))}
          </div>
          <MdNavigateNext
            className="w-16 h-16 cursor-pointer mr-10"
            onClick={handleNext}
          />
        </Flex>
      </div>

      <div id="blog" className="mt-10 py-10 bg-[#F2F4FF] px-[300px]">
        <Flex>
          <p className="font-bold text-3xl mb-4">Blog</p>
          <div className="ml-8">
            <p className="leading-6">
              Chào mừng bạn đến với blog của chúng tôi! Tại đây, bạn sẽ tìm thấy
              kinh nghiệm học tiếng Nhật, những câu chuyện văn hóa thú vị và
              thông tin mới nhất về kỳ thi JLPT.
            </p>
            <button
              onClick={handleClick}
              className="text-white bg-[#292D32] font-semibold py-2 px-6 rounded-md my-4 hover:bg-gray-800"
            >
              Xem tất cả
            </button>
          </div>
        </Flex>

        <Flex className="gap-2">
          <div
            style={{
              backgroundImage: `url(${i14})`,
              height: "300px",
              width: "50%",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="w-[100%] py-10  bg-[#00000099] px-4 content-end absolute bottom-0">
              <Flex className="justify-between">
                <p className="font-bold text-white text-xl">
                  Học bổng chính phủ Nhật
                </p>
                <GrFormNextLink
                  className="w-8 h-8 my-auto bg-white text-black rounded-full"
                  onClick={handleClick}
                />
              </Flex>
              <p className="my-2 text-white font-semibold">
                Các thông tin về học bổng.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${i15})`,
              height: "300px",
              width: "30%",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="w-[100%] py-10  bg-[#00000099] px-4 content-end absolute bottom-0">
              <Flex className="justify-between">
                <p className="font-bold text-white text-xl">Du học</p>
                <GrFormNextLink
                  className="w-8 h-8 my-auto bg-white text-black rounded-full"
                  onClick={handleClick}
                />
              </Flex>
              <p className="my-2 text-white font-semibold">
                Cơ hội du học cho bạn!
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${i16})`,
              height: "300px",
              width: "30%",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="w-[100%] py-10  bg-[#00000099] px-4 content-end absolute bottom-0">
              <Flex className="justify-between">
                <p className="font-bold text-white text-xl">Cuộc sống</p>
                <GrFormNextLink
                  className="w-8 h-8 my-auto bg-white text-black rounded-full"
                  onClick={handleClick}
                />
              </Flex>
              <p className="my-2 text-white font-semibold">
                Sốc văn hóa khi ở Nhật?
              </p>
            </div>
          </div>
        </Flex>
      </div>

      <div id="purposes" className="">
        <p className="font-bold text-3xl mb-4 text-center mt-10">Phương châm</p>
        <div className="-my-[100px] flex min-h-screen items-center justify-center overflow-x-hidden px-1 py-6">
          <div className="group/list flex justify-center gap-1">
            <div className="peer order-last flex w-max items-center justify-center gap-1">
              {purposes.map((purpose) => (
                <div
                  key={purpose.id}
                  className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96"
                >
                  <div className="h-96">
                    <img
                      className="h-full w-full rounded-lg object-cover"
                      src={purpose.img}
                      alt={purpose.name}
                    />
                  </div>
                  <div className="flex w-96 justify-between px-2 pt-2">
                    <div className="relative">
                      <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                        {purpose.name}
                      </span>
                      <h2 className="leading-0 font-semibold text-lg text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                        {purpose.name}
                        <p className="font-normal text-sm text-justify">
                          {purpose.desc}
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="tests" className="mt-10 py-10 bg-[#F2F4FF] px-[300px]">
        <p className="font-bold text-3xl mb-4 text-center">
          Kiểm tra trình độ ngay !
        </p>
        <Flex className="mt-5">
          <div>
            <p className="leading-6 text-justify">
              Chúng tôi cung cấp cho bạn bài kiểm tra đầu vào để kiểm tra trình
              độ hiện tại và giúp bạn dễ dàng xây dựng một lộ trình học hợp lý.
            </p>
            <button
              className="bg-[#1C2755] text-white py-2 px-4 font-semibold mt-4 rounded-lg hover:bg-[#364D79]"
              onClick={handleClick}
            >
              Làm bài ngay
            </button>
          </div>
          <img src={i17} alt="" className="w-[50%] ml-10 rounded-xl" />
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
