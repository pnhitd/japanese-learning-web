import React from 'react'
import { Carousel } from 'antd';
import c1 from '../../../assets/carouselImgs/c1.png'
import c2 from '../../../assets/carouselImgs/c2.png'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const TodaySchedulerPage = () => {
  return (
    <div>
      <Carousel className='mt-4 mx-10'>
        <div>
          <img style={contentStyle} src={c1} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={c2} alt="" />
        </div>
      </Carousel>

      <div className='text-center mb-10 mx-10'>
        <h1 className='font-bold text-[55px]'>Lịch học của bạn</h1>
        <p className='text-[18px] leading-[25px] text-[#696E82]'>
          Cùng nhau xem lịch học của bạn nhé!
          <br />
          Đừng bỏ lỡ bất kỳ buổi học nào nhé vì buổi học nào cũng rất quan trọng đấy!
        </p>
      </div>

      <div className='flex mx-10'>
        <div className='w-[60%]'>
          <div className='flex justify-between text-[25px] font-semibold text-[#12084E]'>
            <h3>Lịch học hôm nay</h3>
            <div className='flex'>
              <h3>07, tháng 6, 2024</h3>
              <IoChevronBackCircleOutline className='w-6 h-6 my-auto ml-2' />
              <IoChevronBackCircleOutline className='rotate-180 w-6 h-6 my-auto ml-1' />
            </div>
          </div>

          <div className='flex gap-4 border-gray-200 border-2 rounded-lg p-2 justify-between mt-4 shadow-lg'>
            <MdNavigateNext className='rotate-180 w-6 h-6 my-auto' />

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <div className='text-center'>
              <p>Thứ hai</p>
              <h3>03</h3>
            </div>

            <MdNavigateNext className='w-6 h-6 my-auto' />
          </div>


          <div className='border-gray-200 border-2 rounded-lg p-2 mt-4 shadow-lg'>
            <h4 className='font-bold text-lg'>Buổi học trong ngày</h4>
            <div className='flex mt-4 ml-3'>
              <div className='text-lg font-semibold my-auto'>
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className='my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]'>
                <h5 className='text-lg font-semibold'>Sửa đề JLPT N3 - Đề 2</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className='my-auto ml-4'>
                <h5 className='text-lg font-semibold text-[#58CC02]'>Đang diễn ra</h5>
              </div>
            </div>

            <div className='flex mt-4 ml-3'>
              <div className='text-lg font-semibold my-auto'>
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className='my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]'>
                <h5 className='text-lg font-semibold'>Sửa đề JLPT N3 - Đề 3</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className='my-auto ml-4'>
                <FiCheckCircle className='w-6 h-6 mx-auto mb-1 text-gray-400' />
                <h5 className='text-lg font-semibold text-gray-400'>Sắp diễn ra</h5>
              </div>
            </div>

            <div className='flex mt-4 ml-3'>
              <div className='text-lg font-semibold my-auto'>
                <p>7:00</p>
                <p>9:00</p>
              </div>

              <div className='my-auto ml-8 bg-[#F490AF] py-4 pl-8 pr-20 rounded-tr-xl rounded-br-xl text-white w-[60%]'>
                <h5 className='text-lg font-semibold'>Sửa đề JLPT N3 - Đề 3</h5>
                <p>Giảng viên: Đào Xuân Phương</p>
                <img src="" alt="" />
              </div>

              <div className='my-auto ml-4'>
                <FiCheckCircle className='w-6 h-6 mx-auto mb-1 text-gray-400' />
                <h5 className='text-lg font-semibold text-gray-400'>Sắp diễn ra</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-16'>
          <Link to='/account/scheduler/month'>
            <div className='flex'>
              <CiHeart className='w-6 h-6 text-blue-600 my-auto' />
              <h3 className='ml-2 font-semibold text-xl text-blue-600'>Xem lịch học trong tuần </h3>
            </div>
          </Link>

          <div className='flex mt-4'>
            <CiCirclePlus className='w-6 h-6 text-blue-600 my-auto' />
            <h3 className='ml-2 font-semibold text-xl text-blue-600'>Thêm lịch trình mới </h3>
          </div>

          <h2 className='font-semibold text-lg mt-8'>Bài tập cần làm</h2>

          <div className='flex bg-[#2B308B] py-4 rounded-xl mt-2'>
            <div className='my-auto text-3xl font-bold text-[#F490AF] ml-4'>01</div>
            <div className='ml-4 text-white'>
              <h3 className='font-semibold text-xl'>Làm bài test Kanji</h3>
              <p className='mt-1'>Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className='flex bg-[#2B308B] py-4 rounded-xl mt-2'>
            <div className='my-auto text-3xl font-bold text-[#F490AF] ml-4'>01</div>
            <div className='ml-4 text-white'>
              <h3 className='font-semibold text-xl'>Làm bài test Kanji</h3>
              <p className='mt-1'>Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className='flex bg-[#2B308B] py-4 rounded-xl mt-2'>
            <div className='my-auto text-3xl font-bold text-[#F490AF] ml-4'>01</div>
            <div className='ml-4 text-white'>
              <h3 className='font-semibold text-xl'>Làm bài test Kanji</h3>
              <p className='mt-1'>Hoàn thành: 5/10 bài</p>
            </div>
          </div>

          <div className='border-2 border-gray-400 rounded-xl py-4 px-4 my-4'>
            <h3 className='font-semibold text-[#2B308B]'>Lịch trình trong ngày</h3>
            <div className='flex mt-2'>
              <p className='text-[rgba(43,48,139,0.7)] font-semibold'>2pm ~ 3pm </p>
              <GoDotFill className='my-auto w-6 h-6 text-[#F490AF]' />
              <p className='text-[#2B308B] font-semibold'>Luyện nói Sakubun 褒められたこと</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TodaySchedulerPage