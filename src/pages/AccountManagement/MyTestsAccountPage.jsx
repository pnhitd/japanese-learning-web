import React, { useState } from 'react'
import Tests from '../../components/Tests'
import { Carousel } from 'antd';
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import { SearchOutlined } from '@ant-design/icons';
import { CiFilter } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const MyTestsAccountPage = () => {
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
        <Link to='/free-resources'>
          <Button className='text-[16x]' shape="round" size={size}>
            Tất cả khóa học
          </Button>
        </Link>
        <Link to='/free-resources/learned'>
          <Button className='ml-2 text-[16px]' shape="round" size={size}>
            Khóa học đã mua
          </Button>
        </Link>
        <Link to='/free-resources/filter'>
          <Button className='ml-2' shape="circle" type="primary" icon={<CiFilter className='text-[16px]' />} size={size} />
        </Link>
        <Input className='ml-2 rounded-3xl w-[68%] py-2 text-[16px]' shape="round" placeholder="Tìm kiếm...." prefix={<SearchOutlined />} />
      </div>

      <div className='text-center mb-10 mx-10'>
        <h1 className='font-bold text-[55px]'>Các bài kiểm tra tổng hợp</h1>
        <p className='text-[18px] leading-[25px] text-[#696E82]'>
          Tất cả những bài kiểm tra tổng hợp mà bạn đã tham gia đều có mặt tại đây!
          <br />
          Hãy thử sức lại với những bài mà bạn làm chưa tốt nhé!
        </p>
      </div>

      <div className='mx-10 mt-6'>
        <Tests />
      </div>

    </div>
  )
}

export default MyTestsAccountPage