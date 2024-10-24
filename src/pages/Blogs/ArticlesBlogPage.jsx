import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Blogs from '../../components/Blogs'
import { Pagination } from 'antd';
import HeaderBlog from '../../components/HeaderBlog'

const ArticlesBlogPage = () => {
  return (
    <div className='mb-10'>
      <HeaderBlog />

      <div className='mx-[165px] mt-6'>
        <div className='flex justify-between justify-items-center border-b-2 border-black pb-2'>
          <h3 className='font-semibold text-2xl'>Các bài viết xu hướng</h3>
          <div className='flex my-auto'>
            <IoArrowBackCircleOutline className='w-6 h-6 text-gray-400' />
            <IoArrowBackCircleOutline className='w-6 h-6 rotate-180 ml-1' />
          </div>
        </div>

        <div>
          <nav className="flex space-x-4 my-4">
            <a href="#all" className="text-gray-600">Tất cả</a>
            <a href="#life" className="text-gray-600">Đời sống</a>
            <a href="#travel" className="text-gray-600">Du lịch</a>
            <a href="#history" className="text-gray-600">Lịch sử</a>
            <a href="#anime" className="text-gray-600">Anime</a>
            <a href="#entertainment" className="text-gray-600">Giải trí</a>
            <a href="#education" className="text-gray-600">Học thuật</a>
          </nav>

          <div className='mt-6'>
            <Blogs />
            <Pagination align="center" defaultCurrent={1} total={50} className='mt-6' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ArticlesBlogPage