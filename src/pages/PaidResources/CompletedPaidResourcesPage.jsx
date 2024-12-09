import React, { useState } from "react";
import PaidCourses from "../../components/PaidCourses";
import { Carousel } from "antd";
import c1 from "../../assets/carouselImgs/c1.png";
import c2 from "../../assets/carouselImgs/c2.png";
import Comments from "../../components/Comments";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
  borderRadius: "10px",
};

const CompletedPaidResourcesPage = () => {
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

     <div className='mx-10 mt-6'>
        <Link to='/paid-resources'>
          <Button className='text-[16x]' shape="round" size={size}>
            Tất cả tài liệu
          </Button>
        </Link>
        <Link to='/paid-resources/completed'>
          <Button className='ml-2 text-[16px]  font-semibold' type="primary" shape="round" size={size}>
            Tài liệu đã học
          </Button>
        </Link>
        <Link to='/paid-resources/in-progress'>
          <Button className='ml-2 text-[16px]' shape="round" size={size}>
            Tài liệu đang học
          </Button>
        </Link>
        <Link to='/paid-resources/not-learned'>
          <Button className='ml-2 text-[16px]'  shape="round" size={size}>
            Tài liệu chưa học
          </Button>
        </Link>
        <Link to='/free-resources/filter'>
          <Button className='ml-2' shape="circle" icon={<CiFilter className='text-[16px]' />} size={size} />
        </Link>
        <Input className='ml-2 rounded-3xl w-[52%] py-2 text-[16px]' shape="round" placeholder="Tìm kiếm...." prefix={<SearchOutlined />} />
      </div>

      <div className="text-center mb-10 mx-10">
        <h1 className="font-bold text-[55px]">Tài liệu trả phí</h1>
        <p className="text-[18px] leading-[25px] text-[#696E82]">
          Khám phá ngôn ngữ và văn hóa Nhật Bản với bộ tài liệu học tiếng Nhật
          chất lượng hơn trên trang web của chúng tôi.
          <br />
          Tài liệu bao gồm từ vựng, ngữ pháp, kanji, nghe hiểu và đọc hiểu, giúp
          bạn tiến bộ mỗi ngày.
          <br />
          Bắt đầu hành trình học tiếng Nhật của bạn ngay hôm nay!
        </p>
      </div>
      <div className="mx-10">
        <PaidCourses filter="completed" />
      </div>

      <div className="text-center bg-[#F8F9FD] py-10">
        <h1 className="font-bold text-[45px]">
          Cảm nghĩ của học viên về tài liệu trả phí
        </h1>
        <p className="text-[20px] font-semibold">
          Hãy tìm hiểu cảm nhận của các học viên về tài liệu trả phí của Sakura
        </p>
        <Comments />
      </div>
    </div>
  );
};

export default CompletedPaidResourcesPage;
