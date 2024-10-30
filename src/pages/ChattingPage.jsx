import React from 'react'
import { Link } from 'react-router-dom'
import chat1 from '../assets/avatars/chat1.png'
import chat2 from '../assets/avatars/chat2.png'
import chat3 from '../assets/avatars/chat3.png'
import { TiPinOutline } from "react-icons/ti";
import { TbCircleNumber1Filled, TbCircleNumber2Filled } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";

const ChattingPage = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className='w-[30%] border-r-2 border-gray-100'>
        <div className='flex'>
          <p>Sắp xếp theo</p>
          <Link to=''>Mới nhất</Link>
        </div>

        <div className='flex p-2'>
          <img className='my-auto' src={chat1} alt="" />
          <div className='flex ml-2'>
            <div className='w-[240px]'>
              <div className='flex'>
                <TiPinOutline className='my-auto mr-1' />
                <p className='font-semibold'>NV Tư vấn khóa học</p>
              </div>
              <div className='text-gray-600'>Bạn cần tư vấn khóa học nào ạ?</div>
            </div>

            <div className='max-w-[40px]'>
              <p className='text-gray-900'>16:45</p>
            </div>
          </div>
        </div>

        <div className='flex mt-2 p-2 bg-[#CEDEFF]'>
          <img className='my-auto' src={chat3} alt="" />
          <div className='flex ml-2 justify-between'>
            <div className='w-[240px]'>
              <p className='font-semibold'>NV Tư vấn khóa học</p>
              <div className='text-gray-600'>Dạ nếu có cần thông tin hỗ...</div>
            </div>

            <div className='w-[40px]'>
              <p className='text-gray-900'>16:45</p>
              <TbCircleNumber1Filled className='mx-auto text-[#2B308B] mt-1 w-5 h-5' />
            </div>
          </div>
        </div>

        <div className='flex mt-2 p-2'>
          <img className='my-auto' src={chat2} alt="" />
          <div className='flex ml-2'>
            <div className='w-[240px]'>
              <p className='font-semibold'>GV Đào Xuân Phương</p>
              <div className='text-gray-600'>you: Sayonara sensei nke!</div>
            </div>

            <div className='w-[40px]'>
              <p className='text-gray-900'>16:45</p>
              <IoMdCheckmark className='mx-auto text-[#27AE60] mt-1 w-4 h-4' />
            </div>
          </div>
        </div>

        <div className='flex mt-2 p-2'>
          <img className='my-auto' src={chat3} alt="" />
          <div className='flex ml-2 justify-between'>
            <div className='w-[240px]'>
              <p className='font-semibold'>NV Tư vấn khóa học</p>
              <div className='text-gray-600'>Dạ nếu có cần thông tin hỗ...</div>
            </div>

            <div className='w-[40px]'>
              <p className='text-gray-900'>16:45</p>
              <TbCircleNumber2Filled className='mx-auto text-[#2B308B] mt-1 w-5 h-5' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-[70%]'>
        <div>
          {/* Noi dung chinh */}
          <div className='flex'>
            <div className='flex'>
              <img src={chat1} alt="" />
              <div>
                <h3>NV Hỗ trợ thanh toán</h3>
                <p>Online</p>
              </div>
            </div>

            <div className='flex'>
              <p>icon</p>
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>

          {/* Tin nhan */}
          <div>
            <p>Hôm qua</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ChattingPage