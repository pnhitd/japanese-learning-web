import React from 'react'
import Blogs from '../../components/Blogs'
import Articles from '../../components/Articles'
import fall from '../../assets/fall.png'
import torri from '../../assets/torii.png'
import { LuDot } from "react-icons/lu";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Categories from '../../components/Categories'
import { Link } from 'react-router-dom';
import HeaderBlog from '../../components/HeaderBlog'

const MainBlogPage = () => {
  return (
    <div>
      <HeaderBlog />

      <div className='mx-[165px] mt-6'>
        <div className='flex justify-between justify-items-center border-b-2 border-black pb-2'>
          <h3 className='font-semibold text-2xl'>Các bài viết xu hướng</h3>
          <div className='flex my-auto'>
            <IoArrowBackCircleOutline className='w-6 h-6 text-gray-400' />
            <IoArrowBackCircleOutline className='w-6 h-6 rotate-180 ml-1' />
          </div>
        </div>

        <div className='grid grid-cols-2 text-white mt-6'>
          <img src={fall} alt="" />
          <div className='relative'>
            <img className='opacity-10' src={fall} alt="" />
            <div className='absolute top-2 left-2 text-black'>
              <div className='flex'>
                <p className=''>Du lịch</p>
                <LuDot className='ml-1 my-auto' />
                <p>1 Ngày trước </p>
              </div>
              <h3>Hoa anh đào nở rộ</h3>
              <p>Không có gì kỳ diệu hơn việc ngắm nhìn hoa anh đào khoe sắc bên cạnh các cảnh sắc đặc trưng trên khắp nước Nhật – từ thủ đô Tokyo lấp lánh ánh đèn, những ngôi đền truyền thống tại cố đô Kyoto,...</p>
              <div className='flex'>
                <p>Lượt xem: 10.000</p>
                <div className='flex'>
                  <p>Đọc thêm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 text-white'>
          <div className='relative'>
            <img className='opacity-10' src={torri} alt="" />
            <div className='absolute top-2 left-2 text-black'>
              <div className='flex'>
                <p className=''>Du lịch</p>
                <LuDot className='ml-1 my-auto' />
                <p>1 Ngày trước </p>
              </div>
              <h3>Hoa anh đào nở rộ</h3>
              <p>Không có gì kỳ diệu hơn việc ngắm nhìn hoa anh đào khoe sắc bên cạnh các cảnh sắc đặc trưng trên khắp nước Nhật – từ thủ đô Tokyo lấp lánh ánh đèn, những ngôi đền truyền thống tại cố đô Kyoto,...</p>
              <div className='flex'>
                <p>Lượt xem: 10.000</p>
                <div className='flex'>
                  <p>Đọc thêm</p>
                </div>
              </div>
            </div>
          </div>
          <img src={torri} alt="" />
        </div>

        <div className='mt-6'>
          <div className='flex justify-between justify-items-center border-b-2 border-black pb-2'>
            <h3 className='font-semibold text-2xl'>Các bài viết gần đây</h3>
            <Link to='/blog/articles' className='font-bold text-xl my-auto'>Xem tất cả</Link>
          </div>

          <div className='mt-6'>
            <Blogs />
          </div>
        </div>

        <div className='mt-6'>
          <div className='flex justify-between justify-items-center border-b-2 border-black pb-2'>
            <h3 className='font-semibold text-2xl'>Các bài viết ngắn</h3>
            <h className='font-bold text-xl my-auto'>Xem tất cả</h>
          </div>

          <div className='mt-6'>
            <Articles />
          </div>
        </div>

        <div className='mt-6 mb-10'>
          <div className='flex justify-between justify-items-center border-b-2 border-black pb-2'>
            <h3 className='font-semibold text-2xl'>Thể loại</h3>
            <h3 className='font-bold text-xl my-auto'>Xem tất cả</h3>
          </div>

          <Categories />
        </div>
      </div>
    </div>
  )
}

export default MainBlogPage