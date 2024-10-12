import React, { useState } from 'react'
import Courses from '../../components/Courses';
import { Carousel } from 'antd';
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import Comments from '../../components/Comments';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CiFilter } from "react-icons/ci";


const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const FreeDocumentPage = () => {
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
        <Button className='text-[16x] font-semibold' type="primary" shape="round" size={size}>
          Tất cả khóa học
        </Button>
        <Button className='ml-2 text-[16px]' shape="round" size={size}>
          Khóa học đã mua
        </Button>
        <Button className='ml-2' shape="circle" icon={<CiFilter className='text-[16px]' />} size={size} />
        <Input className='ml-2 rounded-3xl w-[68%] py-2 text-[16px]' shape="round" placeholder="Tìm kiếm...." prefix={<SearchOutlined />} />
      </div>

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

export default FreeDocumentPage