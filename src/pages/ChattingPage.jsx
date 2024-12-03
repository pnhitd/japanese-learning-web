import React from "react";
import { Link } from "react-router-dom";
import chat1 from "../assets/avatars/chat1.png";
import chat2 from "../assets/avatars/chat2.png";
import chat3 from "../assets/avatars/chat3.png";
import chat4 from "../assets/avatars/chat4.jpg";
import { TiPinOutline } from "react-icons/ti";
import { TbCircleNumber1Filled, TbCircleNumber2Filled } from "react-icons/tb";
import { IoMdCheckmark, IoIosInformationCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaAngleDown } from "react-icons/fa";
import {
  IoVideocamOutline,
  IoCheckmarkDone,
  IoSearchSharp,
} from "react-icons/io5";
import { adminData, customerData } from "../data/chatData";
import { RiAttachment2 } from "react-icons/ri";
import { Input } from "antd";

const ChattingPage = () => {
  return (
    <div className="flex h-[100%]">
      <div className="w-[27%] border-r-2 border-gray-100">
        <Input
          placeholder="Tìm kiếm"
          className="my-4 mx-2 w-[95%] rounded-xl"
          prefix={
            <IoSearchSharp
              style={{
                color: "rgba(0,0,0,.25)",
              }}
            />
          }
        />
        <div className="flex mx-4 mb-4">
          <p>Sắp xếp theo</p>
          <Link to="" className="ml-4 text-[#2D9CDB]">
            Mới nhất
            <FaAngleDown className="inline-block ml-1" />
          </Link>
        </div>

        <div className="flex p-2">
          <img className="my-auto" src={chat1} alt="" />
          <div className="flex ml-2">
            <div className="w-[240px]">
              <div className="flex">
                <TiPinOutline className="my-auto mr-1" />
                <p className="font-semibold">NV Tư vấn khóa học</p>
              </div>
              <div className="text-gray-600">
                Bạn cần tư vấn khóa học nào ạ?
              </div>
            </div>

            <div className="max-w-[40px]">
              <p className="text-gray-900">16:45</p>
            </div>
          </div>
        </div>

        <div className="flex mt-2 p-2 bg-[#CEDEFF]">
          <img className="my-auto" src={chat3} alt="" />
          <div className="flex ml-2 justify-between">
            <div className="w-[240px]">
              <p className="font-semibold">NV Tư vấn khóa học</p>
              <div className="text-gray-600">Dạ nếu có cần thông tin hỗ...</div>
            </div>

            <div className="w-[40px]">
              <p className="text-gray-900">16:45</p>
              <TbCircleNumber1Filled className="mx-auto text-[#2B308B] mt-1 w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex mt-2 p-2">
          <img className="my-auto" src={chat2} alt="" />
          <div className="flex ml-2">
            <div className="w-[240px]">
              <p className="font-semibold">GV Đào Xuân Phương</p>
              <div className="text-gray-600">you: Sayonara sensei nke!</div>
            </div>

            <div className="w-[40px]">
              <p className="text-gray-900">16:45</p>
              <IoMdCheckmark className="mx-auto text-[#27AE60] mt-1 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex mt-2 p-2">
          <img className="my-auto" src={chat3} alt="" />
          <div className="flex ml-2 justify-between">
            <div className="w-[240px]">
              <p className="font-semibold">NV Tư vấn khóa học</p>
              <div className="text-gray-600">Dạ nếu có cần thông tin hỗ...</div>
            </div>

            <div className="w-[40px]">
              <p className="text-gray-900">16:45</p>
              <TbCircleNumber2Filled className="mx-auto text-[#2B308B] mt-1 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[75%]">
        <div>
          <div className="flex justify-between py-2 px-4 bg-[#CEDEFF]">
            <div className="flex my-auto">
              <img src={chat1} alt="" />
              <div className="mx-4">
                <h3 className="font-semibold">NV Hỗ trợ thanh toán</h3>
                <p>Online</p>
              </div>
            </div>

            <div className="flex my-auto">
              <FaPhoneAlt className="w-5 h-5 mx-2" />
              <IoVideocamOutline className="w-5 h-5 mx-2" />
              <IoIosInformationCircleOutline className="w-5 h-5 mx-2" />
            </div>
          </div>

          <div className="px-4 mt-4">
            <div class="flex items-center space-x-4">
              <div class="flex-grow h-px bg-gray-200"></div>
              <span class="text-gray-500 font-medium">Hôm qua</span>
              <div class="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="flex mt-2">
              <img src={chat4} alt="" className="w-8 h-8 rounded-full mr-2" />
              {adminData.map(
                (item) =>
                  item.date === "Hôm qua" && (
                    <p
                      id={item.id}
                      className="bg-[#F4F4F7] py-2 px-3 rounded-r-2xl rounded-bl-2xl"
                    >
                      <p>{item.desc}</p>
                      <span className="text-[#00000073] mt-1 text-[13px]">
                        15:42
                      </span>
                    </p>
                  )
              )}
            </div>

            <div class="flex items-center space-x-4 mt-2">
              <div class="flex-grow h-px bg-gray-200"></div>
              <span class="text-gray-500 font-medium">Hôm nay</span>
              <div class="flex-grow h-px bg-gray-200"></div>
            </div>

            <div>
              {customerData.map(
                (item) =>
                  item.date === "Hôm nay" && (
                    <div id={item.id} className="mt-2 flex flex-row-reverse">
                      <p className="bg-[#CEDEFF] py-2 px-3 rounded-tr-2xl rounded-l-2xl">
                        <p>{item.desc}</p>
                        <p className="flex flex-row-reverse mt-1">
                          <span className="text-[#00000073] text-[13px]">
                            15:42
                          </span>
                          <IoCheckmarkDone className="text-[#27AE60] my-auto mr-1" />
                        </p>
                      </p>
                    </div>
                  )
              )}
            </div>

            <div className="flex mt-2">
              <img src={chat4} alt="" className="w-8 h-8 rounded-full mr-2" />
              {adminData.map(
                (item) =>
                  item.date === "14:30" && (
                    <p
                      id={item.id}
                      className="bg-[#F4F4F7] py-2 px-3 rounded-r-2xl rounded-bl-2xl max-w-[600px]"
                    >
                      <p>{item.desc}</p>
                      <span className="text-[#00000073] mt-1 text-[13px]">
                        14:30
                      </span>
                    </p>
                  )
              )}
            </div>

            <div>
              {customerData.map(
                (item) =>
                  item.date === "16:12" && (
                    <div id={item.id} className="mt-2 flex flex-row-reverse">
                      <p className="bg-[#CEDEFF] py-2 px-3 rounded-tr-2xl rounded-l-2xl">
                        <p>{item.desc}</p>
                        <p className="flex flex-row-reverse mt-1">
                          <span className="text-[#00000073] text-[13px]">
                            16:12
                          </span>
                          <IoCheckmarkDone className="text-[#27AE60] my-auto mr-1" />
                        </p>
                      </p>
                    </div>
                  )
              )}
            </div>

            <div className="flex mt-2 max-w-[600px]">
              <img src={chat4} alt="" className="w-8 h-8 rounded-full mr-2" />
              {adminData.map(
                (item) =>
                  item.date === "14:45" && (
                    <p
                      id={item.id}
                      className="bg-[#F4F4F7] py-2 px-3 rounded-r-2xl rounded-bl-2xl"
                    >
                      <p>{item.desc}</p>
                      <span className="text-[#00000073] mt-1 text-[13px]">
                        14:45
                      </span>
                    </p>
                  )
              )}
            </div>

            <div className="flex mt-4">
              <RiAttachment2 className="w-5 h-5 mr-5 flex-none my-auto" />
              <input
                type="text"
                placeholder="Nhập tin nhắn ở đây..."
                className="flex-auto bg-[#FAFAFA] text-[#00000073] px-6 py-4 rounded-2xl border-none border-transparent"
              />
              <button className="ml-4 text-[#27AE60] font-semibold">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingPage;
