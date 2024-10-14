import React from 'react'
import c3 from '../../assets/carouselImgs/c3.png'
import students from '../../assets/carouselImgs/StudentsProfile.png'
import { Button } from 'antd';
import d1 from '../../assets/carouselImgs/d1.png'
import { Link } from 'react-router-dom';

const SavedAccountPage = () => {
    return (
        <div>
            <div className='mt-4'>
                <img className='h-[70%]' src={c3} alt="" />
                <img className='w-[70%] -mt-20 mx-auto' src={students} />
            </div>

            <div className='grid grid-cols-2 m-10'>
                <div>
                    <div className='p-6 border-gray-300 rounded-xl border-2'>
                        <h2 className='font-bold text-xl'>Chi tiết người dùng</h2>

                        <p className='text-end font-semibold text-blue-400'>Sửa thông tin cá nhân</p>
                        <h3 className='font-semibold'>Họ và tên</h3>
                        <p>Trần Nhật Trường</p>
                        <h3 className='font-semibold mt-2'>Giới tính</h3>
                        <p>Nam</p>

                        <h3 className='font-semibold mt-2'>Ngày tháng năm sinh</h3>
                        <p>17/10/2004</p>
                        <h3 className='font-semibold mt-2'>Số điện thoại</h3>
                        <p>0123456789</p>
                        <h3 className='font-semibold mt-2'>Gamil</h3>
                        <p>trannhattruong@gmail.com</p>
                        <h3 className='font-semibold mt-2'>Sở thích</h3>
                        <Button className='mt-2 py-4 px-8' type="primary" shape="round">
                            Ước những điều không có thật
                        </Button>
                        <Button className='mt-2 py-4 px-8 ml-2' type="primary" shape="round">
                            Ước được nghỉ học
                        </Button>
                    </div>

                    <div className='p-6 border-gray-300 rounded-xl border-2 mt-6'>
                        <h2 className='font-bold text-xl'>Chi tiết các khóa học đã mua</h2>
                        <h4 className='font-semibold mt-2'>Mô tả sơ lược khóa học</h4>
                        <div>
                            <div className='flex mt-4 border-gray-300 rounded-xl border-2 p-2'>
                                <img src={d1} alt="" />
                                <div className='ml-4 my-auto'>
                                    <p className='font-semibold'>Tiếng Nhật chuyên ngành Công nghệ Thông tin</p>
                                    <p className='text-gray-600'>Ngày mua: 12/05/2024</p>
                                </div>
                            </div>
                            <div className='flex mt-4 border-gray-300 rounded-xl border-2 p-2'>
                                <img src={d1} alt="" />
                                <div className='ml-4 my-auto'>
                                    <p className='font-semibold'>Tiếng Nhật chuyên ngành Công nghệ Thông tin</p>
                                    <p className='text-gray-600'>Ngày mua: 12/05/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ml-4 -mt-2'>
                    <div className='p-6 border-gray-300 rounded-xl border-2 mt-2'>
                        <h2 className='font-bold text-xl mb-2'>Các nội dung khác</h2>
                        <Link to='/' className='text-blue-400 font-semibold'>Xem trang Blog</Link>
                        <br className='my-2' />
                        <Link to='/' className='text-blue-400 font-semibold'>Xem thông báo mới</Link>
                        <br className='my-2' />
                        <Link to='/' className='text-blue-400 font-semibold'>Trò chuyện với nhân viên hỗ trợ</Link>
                    </div>

                    <div className='p-6 border-gray-300 rounded-xl border-2 mt-6'>
                        <h2 className='font-bold text-xl'>Hoạt động đăng nhập</h2>
                        <h4 className='font-semibold mt-4'>Lần đầu đăng nhập vào trang web</h4>
                        <p className='text-gray-600 mt-2'>Thứ Hai, 1 tháng 2 năm 2024, 1:30 PM (122 ngày)</p>
                        <h4 className='font-semibold mt-4'>Lần đăng nhập gần nhất vào trang web</h4>
                        <p className='text-gray-600 mt-2'>Thứ Hai, 6 tháng 7 năm 2024, 2:30 PM (50 giây)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedAccountPage