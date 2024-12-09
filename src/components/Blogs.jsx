import React from "react";
import blogsData from "../data/blogsData";
import { Card } from "antd";
import { LuDot } from "react-icons/lu";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {blogsData.map((blog) => (
        <Card
          key={blog.id}
          hoverable
          style={{
            width: 300,
            borderRadius: "0",
          }}
          cover={<img src={blog.img} alt="" />}
        >
          <div className="flex -mt-2">
            <p>{blog.field}</p>
            <LuDot className="ml-1 my-auto" />
            <p className="ml-1">{blog.time}</p>
          </div>
          <h3 className="font-bold text-[18px] mt-1">{blog.title}</h3>
          <p className="mt-1 text-justify">{blog.desc}</p>
          <div className="flex justify-between mt-2">
            <p className="font-semibold text-[#6E6E6E]">
              Lượt xem: {blog.views}
            </p>
            <Link to={blog.link} className="flex text-[#F490AF] font-medium">
              <p>Đọc thêm</p>
              <MdOutlineKeyboardBackspace className="ml-1.5 w-4 h-4 mt-1 rotate-180" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;
