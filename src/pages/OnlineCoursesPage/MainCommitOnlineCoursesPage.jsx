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

const MainCommitOnlineCoursesPage = () => {
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
          <Button className='text-[16x]  w-48'  shape="round" size={size}>
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
          <Button className='ml-2 text-[16px] w-48'  type="primary" shape="round" size={size}>
            Cam kết khóa học
          </Button>
        </Link>
      
      </div>

      <div className='flex flex-row m-10'>
          <div className='basis-1/3 flex flex-col'>
              <img src={COI1} alt="" />
              <div className="mt-4 flex gap-5 justify-between">
                  <button className="w-52 py-2 text-base font-medium border border-gray-800 text-gray-800 rounded-md hover:border-[#2B308B] hover:text-[#2B308B] ">
                    Mua ngay
                  </button>
                  <button className="w-52 py-2 text-base font-medium bg-[#2B308B] text-white rounded-md hover:bg-blue-700">
                    Thêm vào giỏ hàng
                  </button>
              </div>
          </div>
          <div className='ml-20 basis-2/3 flex flex-col gap-5'>
              <p className='font-extrabold text-4xl'>SAKURA JAPANESE CAM KẾT:</p>
              <div className='text-base text-justify'>
                  <p className='mb-2 text-2xl font-bold text-[#2B308B] '>1. Nội dung khóa học chất lượng và phù hợp</p>
                  <p className='ml-7'>Cung cấp chương trình học được thiết kế bài bản, sát với chuyên ngành Công nghệ Thông tin.</p>
                  <p className='ml-7'>Nội dung giảng dạy bao gồm từ vựng, mẫu câu, và các kỹ năng giao tiếp tiếng Nhật liên quan đến công việc IT.</p>
                  <br />
                  
                  <p className='mb-2 text-2xl font-bold text-[#2B308B] '>2. Đội ngũ giảng viên chất lượng cao</p>
                  <p className='ml-7'>Giảng viên có kinh nghiệm trong lĩnh vực CNTT và giảng dạy tiếng Nhật, đảm bảo truyền tải kiến thức hiệu quả.</p>
                  <p className='ml-7'>Sẵn sàng hỗ trợ học viên trong suốt quá trình học tập để giải đáp thắc mắc và giải quyết khó khăn.</p>
                  <br />

                  <p className='mb-2 text-2xl font-bold text-[#2B308B] '>3. Công cụ học tập hiện đại</p>
                  <p className='ml-7'>Hỗ trợ học viên thông qua các nền tảng học trực tuyến chuyên nghiệp, đảm bảo quá trình học tập không bị gián đoạn.</p>
                  <p className='ml-7'>Cung cấp tài liệu học tập chất lượng, gồm bài giảng, bài tập và các tài liệu tham khảo liên quan.</p>
                  <br />

                  <p className='mb-2 text-2xl font-bold text-[#2B308B] '>4. Hỗ trợ học viên</p>
                  <p className='ml-7'>Hỗ trợ giải đáp mọi thắc mắc liên quan đến khóa học trong vòng 24 giờ làm việc qua các kênh liên lạc của trung tâm.</p>
                  <p className='ml-7'>Cung cấp lộ trình học tập rõ ràng và các bài kiểm tra định kỳ để đánh giá tiến độ của học viên.</p>
              </div>
          </div>
      </div>

    </div>
  )
}

export default MainCommitOnlineCoursesPage