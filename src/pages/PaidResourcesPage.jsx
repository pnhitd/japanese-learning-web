import React from 'react'
import Courses from '../components/Courses';
import { Carousel } from 'antd';
import c1 from '../assets/CarouselImgs/c1.png'
import c2 from '../assets/CarouselImgs/c2.png'
import Comments from '../components/Comments';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const PaidResourcesPage = () => {
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
      <div className='text-center mb-10 mx-10'>
        <h1 className='font-bold text-[55px]'>Tài liệu miễn phí</h1>
        <p className='text-[18px] leading-[25px] text-[#696E82]'>
          Khám phá ngôn ngữ và văn hóa Nhật Bản hoàn toàn miễn phí với bộ tài liệu học tiếng Nhật trên trang web của chúng tôi.
          <br />
          Tài liệu bao gồm từ vựng, ngữ pháp, kanji, nghe hiểu và đọc hiểu, giúp bạn tiến bộ mỗi ngày.
          <br />
          Bắt đầu hành trình học tiếng Nhật của bạn ngay hôm nay!"
        </p>
      </div>
      <div className='mx-10'>
        <Courses />
      </div>
      <Comments />
    </div>
  )
}

export default PaidResourcesPage