import React, { useState } from 'react'
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import Comments from '../../components/Comments';
import { Carousel, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import COI1 from '../../assets/OnlineCourses/COI1.png';
import MyTimeline from '../../components/MyTimeline';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const MainPathStudyOnlineCoursesPage = () => {
  const [size, setSize] = useState('large');

  return (
    <div>
      <Carousel autoplay className='mt-4 mx-10'>
        <div>
          <img style={contentStyle} src={c1} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={c2} alt="" />
        </div>
      </Carousel>

      <div className='mx-10 mt-6'>
        <Link to='/online-courses/infor'>
          <Button className='text-[16x] w-48'  shape="round" size={size}>
            Thông tin khóa học
          </Button>
        </Link>
        <Link to='/online-courses/schedule'>
          <Button className='ml-2 text-[16px] w-48' shape="round" size={size}>
            Lịch học
          </Button>
        </Link>
        <Link to='/online-courses/study-path'>
          <Button className='ml-2 text-[16px] w-48'  type="primary" shape="round" size={size}>
            Lộ trình học tập
          </Button>
        </Link>
        <Link to='/online-courses/commit'>
          <Button className='ml-2 text-[16px] w-48' shape="round" size={size}>
            Cam kết khóa học
          </Button>
        </Link>
      
      </div>

      <div className='flex flex-row m-10'>
          <div className='basis-1/3 flex flex-col'>
              <img src={COI1} alt="Ảnh minh họa" />
              <div className="mt-7 flex flex-row justify-between">
                  <Link to='/cart-information'>
                    <button className="w-52 py-2 text-base font-medium border border-gray-800 text-gray-800 rounded-md hover:border-[#2B308B] hover:text-[#2B308B] ">
                      Mua ngay
                    </button>
                  </Link>
                  <Link to='/cart-information'>
                    <button className="w-52 py-2 text-base font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Thêm vào giỏ hàng
                    </button>
                  </Link>
              </div>
          </div>
          <div className='ml-20 basis-2/3'>
              <MyTimeline  />
          </div>





      </div>

      

    </div>
  )
}

export default MainPathStudyOnlineCoursesPage