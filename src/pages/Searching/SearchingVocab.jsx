import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import search from "../../assets/search.png";
import kanji from "../../assets/kanji.png";
import commentsSearchingData from "../../data/commentsSearchingData";
import nt from "../../assets/avatars/nt.jpg";

const iconSearch = (
  <SearchOutlined
    style={{
      fontSize: 20,
      marginRight: 10,
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchingVocab = () => {
  return (
    <div>
      <div className="flex justify-center justify-items-center justify-self-center ml-10 mt-4 mb-4">
        <h1 className="font-extrabold text-[40px] mr-6">Tra cứu</h1>
        <Input
          placeholder="書く"
          onSearch={onSearch}
          style={{
            width: 700,
            height: 40,
            borderRadius: "50px",
          }}
          className="my-auto"
          suffix={iconSearch}
        />
      </div>

      <div className="px-6 py-4 flex justify-around">
        <div className="w-[20%]">
          <p className="font-semibold pb-2 text-lg">
            Các từ liên quan tới 書く
          </p>
          <div className="bg-white rounded-xl mt-2 p-4">
            <p className="">願書を書く。</p>
            <p className="pt-2">Viết đơn.</p>
          </div>

          <div className="bg-white rounded-xl mt-2 p-4">
            <p className="">願書を書く。</p>
            <p className="pt-2">Viết đơn.</p>
          </div>

          <div className="bg-white rounded-xl mt-2 p-4">
            <p className="">願書を書く。</p>
            <p className="pt-2">Viết đơn.</p>
          </div>

          <div className="bg-white rounded-xl mt-2 p-4">
            <p className="">願書を書く。</p>
            <p className="pt-2">Viết đơn.</p>
          </div>
        </div>

        <div className="ml-8 relative w-[50%]">
          <p className="bg-[#2B308B] text-white py-1 px-4 font-semibold absolute right-4 top-12 mt-2 rounded-md">
            N5
          </p>
          <p className="font-semibold pb-2 text-lg">Nghĩa của 書く</p>
          <div className="bg-white rounded-xl mt-2">
            <div className="p-4">
              <div className="flex">
                <p className="font-semibold text-[#2B308B] text-4xl">書く</p>
                <HiOutlineSpeakerWave className="w-6 h-6 my-auto ml-4" />
              </div>
              <p className="mt-2">かく [THƯ]</p>
              <p className="bg-[#3E8B2B] text-white rounded-md px-2 py-1 mt-2 max-w-[118px]">
                Động từ nhóm I
              </p>
            </div>

            <div className="flex">
              <div className="px-4">
                <div>
                  <div className="flex">
                    <FaStar className="w-4 h-4 text-[#FFD233] my-auto" />
                    <p className="ml-1 font-semibold">Vẽ</p>
                  </div>
                  <p className="ml-6 my-1">書く時音楽を聞きます。</p>
                  <p className="ml-6 my-1 text-[#67727E]">
                    Khi tôi vẽ, tôi nghe nhạc.
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex">
                    <FaStar className="w-4 h-4 text-[#FFD233] my-auto" />
                    <p className="ml-1 font-semibold">Viết</p>
                  </div>
                  <p className="ml-6 my-1">
                    私の愛について彼にわざわざ手紙を書く。
                  </p>
                  <p className="ml-6 my-1 text-[#67727E]">
                    Tôi cố tình viết thư cho anh ấy về tình cảm của tôi.
                  </p>
                </div>
              </div>
              <img className="ml-8 pb-3" src={search} alt="" />
            </div>
          </div>
        </div>

        <div className="ml-8 w-[22%]">
          <p className="font-semibold pb-2 text-lg">Các chữ kanji của 書く</p>
          <div className="p-4 bg-white leading-6 mt-2 rounded-xl">
            <img src={kanji} alt="" className="mx-auto" />
            <p className="ml-6 mt-6 mb-7">
              <span className="font-semibold">Hán tự: </span>書 - THƯ <br />
              <span className="font-semibold">Âm kun: </span>か.く - が.き -
              がき <br />
              <span className="font-semibold">Âm on: </span>ショ <br />
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="font-semibold pb-2 text-lg">4 đóng góp từ người dùng</p>
        {commentsSearchingData.map((comment) => (
          <div className="bg-white rounded-xl py-4 px-6 mt-2">
            <div id={comment.id}>
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src={comment.avatar}
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="ml-2 font-semibold">{comment.name}</p>
                  <p className="ml-2 text-[#67727E]">1 ngày trước</p>
                </div>

                <div className="flex">
                  <AiOutlineLike className="w-5 h-5 mr-3" />
                  <AiOutlineDislike className="w-5 h-5 mr-3" />
                  <div className="flex">
                    <TiArrowBack className="w-4 h-4 mr-1 my-auto text-[#5357B6]" />
                    <p className="text-[#5357B6] font-semibold">Trả lời</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[#67727E]">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 mb-4">
        <div className="bg-white flex rounded-xl">
          <img src={nt} alt="" className="w-8 h-8 mt-4 rounded-full mx-4 " />
          <textarea className="px-6 py-2 w-[100%] rounded-xl text-[#67727E] h-[100px] my-4 border-[#E9EBF0] border-2">
            Viết đóng góp của bạn
          </textarea>
          <button className="mx-4 my-auto py-2 px-8 bg-[#2B308B] text-white rounded-xl font-semibold">
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchingVocab;
