import React, { useState } from 'react'
import Courses from '../../components/Courses';
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import Comments from '../../components/Comments';
import { Carousel, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CiFilter } from "react-icons/ci";
import { Link } from 'react-router-dom';
import VocabList from '../../components/VocabList';
import vocabData from '../../data/vocabData'

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px'
};

const VocabPage = ({ filter = "in progress" }) => {
  const [size, setSize] = useState('large');

  return (
    <div>
      

      <div className='mx-10 mt-6'>
        <Link to='/free-resources/vocab'>
          <Button className='text-[16x] font-semibold' type="primary" shape="round" size={size}>
            Từ vựng
          </Button>
        </Link>
        <Link to='/free-resources/vocab'>
          <Button className='ml-2 text-[16px]' shape="round" size={size}>
            Kanji
          </Button>
        </Link>
        <Link to='/free-resources/vocab'>
          <Button className='ml-2 text-[16px]' shape="round" size={size}>
            Nghe hiểu
          </Button>
        </Link>
        <Link to='/free-resources/vocab'>
          <Button className='ml-2 text-[16px]'   shape="round" size={size}>
            Đọc hiểu
          </Button>
        </Link>
        <Link to='/free-resources/vocab'>
          <Button className='ml-2' shape="circle" icon={<CiFilter className='text-[16px]' />} size={size} />
        </Link>
        <Input className='ml-2 rounded-3xl w-[52%] py-2 text-[16px]' shape="round" placeholder="Tìm kiếm...." prefix={<SearchOutlined />} />
      </div>

      <div className='w-full h-full p-6'>
            <VocabList vocabularyData={vocabData} />
        </div>
        


 




      
      
      

    </div>
  )
}

export default VocabPage