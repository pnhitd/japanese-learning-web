import React, { useState } from "react";
import Courses from "../../components/Courses";
import c1 from "../../assets/carouselImgs/c1.png";
import c2 from "../../assets/carouselImgs/c2.png";
import Comments from "../../components/Comments";
import { Carousel, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";
import KanjiList from "../../components/KanjiList";
import kanjiData from "../../data/kanjiData";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
  borderRadius: "10px",
};

const KanjiPage = ({ filter = "in progress" }) => {
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
        <Link to="/free-resources/vocab">
          <Button className="text-[16x]" shape="round" size={size}>
            Từ vựng
          </Button>
        </Link>
        <Link to="/free-resources/kanji">
          <Button
            className="ml-2 text-[16px] font-semibold"
            type="primary"
            shape="round"
            size={size}
          >
            Kanji
          </Button>
        </Link>
        <Link to="/free-resources/vocab">
          <Button className="ml-2 text-[16px]" shape="round" size={size}>
            Nghe hiểu
          </Button>
        </Link>
        <Link to="/free-resources/vocab">
          <Button className="ml-2 text-[16px]" shape="round" size={size}>
            Đọc hiểu
          </Button>
        </Link>
        <Link to="/free-resources/vocab">
          <Button
            className="ml-2"
            shape="circle"
            icon={<CiFilter className="text-[16px]" />}
            size={size}
          />
        </Link>
        <Input
          className="ml-2 rounded-3xl w-[66%] py-2 text-[16px]"
          shape="round"
          placeholder="Tìm kiếm...."
          prefix={<SearchOutlined />}
        />
      </div>

      <div className="mt-4 mx-10 mb-10">
        <KanjiList kanjiData={kanjiData} />
      </div>
    </div>
  );
};

export default KanjiPage;
