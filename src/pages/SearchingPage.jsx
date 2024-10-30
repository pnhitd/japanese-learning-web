import React from 'react'
import { Input } from 'antd';
import Lessons from '../components/Lessons';
import { SearchOutlined } from '@ant-design/icons';
import { IoArrowBackSharp } from "react-icons/io5";
import icon from '../assets/icon.png';
import Comments from '../components/Comments';
import shape from '../assets/Shape.png';

const iconSearch = (
  <SearchOutlined
    style={{
      fontSize: 20,
      marginRight: 10,
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchingPage = () => {
  return (
    <div>
      <div className='flex justify-center justify-items-center justify-self-center ml-10 mt-4'>
        <h1 className='font-extrabold text-[40px] mr-6'>Tra cứu</h1>
        <Input
          placeholder="Tra cứu từ vựng, kanji, ngữ pháp..."
          onSearch={onSearch}
          style={{
            width: 700,
            height: 40,
            borderRadius: '50px',
          }}
          className='my-auto'
          suffix={iconSearch}
        />
      </div>

      <div className='mx-24 mb-10'>
        <div className='flex mt-6 gap-12'>
          <div className='flex w-[70%] gap-2'>
            <div className='w-[60%] gap-2'>
              <div className='flex h-[40%] gap-2'>
                <div className='bg-[#F490AF] w-[40%] flex text-white justify-center rounded-lg'>
                  <p className='font-semibold text-xl my-auto'>Đời sống</p>
                  <IoArrowBackSharp className='rotate-180 ml-1 w-6 h-6 my-auto' />
                </div>

                <div className='bg-[#3A3A3A] w-[60%] flex text-white justify-center rounded-lg'>
                  <p className='font-semibold text-xl my-auto'>Ôn thi JLPT</p>
                  <IoArrowBackSharp className='rotate-180 ml-1 w-6 h-6 my-auto' />
                </div>
              </div>

              <div className='bg-[#ACBFFC] h-[60%] mt-2 text-white justify-center rounded-lg'>
                <div className='flex my-auto'>
                  <img src={icon} alt="" className='pt-4 pl-2'/>

                  <div className='flex text-white ml-8'>
                    <p className='font-semibold text-xl my-auto '>Lên kế hoạch <br /> hiệu quả</p>
                    <IoArrowBackSharp className='rotate-180 ml-1 w-6 h-6 my-auto' />
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blue-950 w-[40%] h-[102%] text-white justify-center rounded-lg pb-2'>
              <div>
                <div className='flex justify-center mt-10 pb-2'>
                  <p className='font-semibold text-xl my-auto '>Phương pháp học tập</p>
                  <IoArrowBackSharp className='rotate-180 ml-1 w-6 h-6 my-auto' />
                </div>

                <img className='ml-2 pt-4' src={shape} alt="" />
              </div>
            </div>
          </div>

          <div className='w-[30%] mr-10'>
            <h1 className='font-semibold text-2xl mb-4'>Đề xuất</h1>
            <Lessons />
          </div>
        </div>
      </div>

      <div className='text-center bg-[#F8F9FD] py-10'>
        <h1 className='font-bold text-[45px]'>Cảm nghĩ của học viên</h1>
        <p className='text-[20px] font-semibold'>
          Hãy tìm hiểu cảm nhận của các học viên về khóa học của Sakura
        </p>
        <Comments />
      </div>


    </div>
  )
}

export default SearchingPage

