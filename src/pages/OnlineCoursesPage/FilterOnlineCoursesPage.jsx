import React, { useState } from 'react'
import Courses from '../../components/Courses';
import { Carousel } from 'antd';
import c1 from '../../assets/carouselImgs/c1.png'
import c2 from '../../assets/carouselImgs/c2.png'
import Comments from '../../components/Comments';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CiFilter } from "react-icons/ci";
import { Link } from 'react-router-dom';

const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '10px'
};

const FilterOnlineCoursesPage = () => {
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
                <Link to='/online-resources'>
                    <Button className='text-[16x]' shape="round" size={size}>
                        Tất cả khóa học
                    </Button>
                </Link>
                <Link to='/online-resources/learned'>
                    <Button className='ml-2 text-[16px]' shape="round" size={size}>
                        Khóa học đã mua
                    </Button>
                </Link>
                <Link to='/online-resources/filter'>
                    <Button className='ml-2' shape="circle" type="primary" icon={<CiFilter className='text-[16px]' />} size={size} />
                </Link>
                <Input className='ml-2 rounded-3xl w-[68%] py-2 text-[16px]' shape="round" placeholder="Tìm kiếm...." prefix={<SearchOutlined />} />
            </div>

            <div className='text-center mb-10 mx-10'>
                <h1 className='font-bold text-[55px]'>Khóa học online</h1>
                <p className='text-[18px] leading-[25px] text-[#696E82]'>
                    Các khóa học tiếng Nhật trực tuyến cung cấp một phương tiện hiệu quả để học ngôn ngữ này từ bất kỳ đâu và bất kỳ lúc nào
                    <br />
                    Các tài liệu học đa dạng từ cơ bản đến nâng cao, kèm theo các bài kiểm tra và hoạt động tương tác để giúp học viên phát triển kỹ năng ngôn ngữ một cách toàn diện.
                    <br />
                    Đồng thời, các khóa học này thường cung cấp sự hỗ trợ từ giáo viên và cộng đồng học viên, tạo điều kiện cho môi trường học tập tích cực và động viên.
                </p>
            </div>
            <div className='mx-10'>
                <Courses />
            </div>
            <Comments />

        </div>
    )
}

export default FilterOnlineCoursesPage