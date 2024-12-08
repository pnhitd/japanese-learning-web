import React, { useState } from 'react'
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import Comments from '../../components/Comments';
import { Carousel, Button, Input } from 'antd';
import CommentSection from '../../components/CommentSection';
import { Link } from 'react-router-dom';
import COI1 from '../../assets/OnlineCourses/COI1.png';


const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const MainInforOnlineCousePage = () => {
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
          <Button className='text-[16x] font-semibold w-48' type="primary"  shape="round" size={size}>
            Thông tin khóa học
          </Button>
        </Link>
        <Link to='/online-courses/schedule'>
          <Button className='ml-2 text-[16px] w-48' shape="round" size={size}>
            Lịch học
          </Button>
        </Link>
        <Link to='/online-courses/study-path'>
          <Button className='ml-2 text-[16px] w-48' shape="round" size={size}>
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
              <img src={COI1} alt="" />
          </div>
          <div className='ml-20 basis-2/3 flex flex-col gap-5'>
              <p className='font-extrabold text-4xl'>Tiếng Nhật chuyên ngành CNTT</p>
              <p className='font-bold text-xl '>Học phí: 1.500.000 VNĐ</p>
              <div className='text-base text-justify'>
                  <p>Nội dung khóa học: Bao gồm việc học từ vựng, ngữ pháp và kỹ năng giao tiếp trong lĩnh vực Công nghệ Thông Tin. Tập trung vào việc nắm vững thuật ngữ và cụm từ chuyên ngành, cũng như phát triển khả năng giao tiếp trong môi trường làm việc.</p>
                  <br />
                  <p>Phương pháp giảng dạy: Sử dụng một sự kết hợp giữa các bài giảng trực tuyến, bài tập thực hành, và các hoạt động tương tác với giáo viên và các đồng học viên.</p>
                  <br />
                  <p>Mục tiêu học tập: Đạt được khả năng sử dụng tiếng Nhật một cách linh hoạt và tự tin trong môi trường làm việc Công nghệ Thông Tin, từ việc đọc hiểu tài liệu, thảo luận, đến việc giao tiếp hàng ngày và làm việc nhóm.</p>
              </div>
              <div className="mt-4 flex gap-5">
                  <Link to='/cart-information'>
                    <button className="w-48 py-2 text-base font-medium border border-gray-800 text-gray-800 rounded-md hover:border-[#2B308B] hover:text-[#2B308B] ">
                      Mua ngay
                    </button>
                  </Link>
                  <Link to='/cart-information'>
                    <button className="w-48 py-2 text-base font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                      Thêm vào giỏ hàng
                    </button>
                  </Link>
              </div>
          </div>





      </div>

      <div className='bg-[#F8F9FD] py-10'>
        <h1 className='ml-10 mb-3 font-bold text-4xl'>2089 đánh giá</h1>
        <p className='ml-10 text-[20px] font-semibold text-gray-700'>
          Hãy để lại đánh giá của bạn về khóa học này
        </p>
        <CommentSection></CommentSection>
      </div>

    </div>
  )
}

export default MainInforOnlineCousePage