import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-blue-200 pt-10'>
            <div className='flex justify-center'>
                <div className='mr-20 leading-7 '>
                    <div className='flex mx-auto'>
                        <img className='w-24 h-24' src={Logo} alt="" />
                        <div className='text-center my-auto pl-2'>
                            <h1 className="text-[#F490AF] font-bold text-xl">SAKURA</h1>
                            <p className='font-semibold'>JAPANESE</p>
                        </div>
                    </div>
                    <div className='text-center font-semibold text-base'>
                        Nơi khởi đầu
                        <br />
                        hành trình tiếng Nhật của bạn
                    </div>
                </div>

                <div className='mr-20 leading-7'>
                    <h2 className='text-lg pb-2 font-semibold'>Bạn cần hỗ trợ</h2>
                    <p>Chat với nhân viên</p>
                    <p>Lỗi đăng nhập</p>
                    <p>Thanh toán khóa học</p>
                    <p>Báo cáo lỗi</p>
                </div>

                <div className='mr-20 leading-7'>
                    <h2 className='text-lg pb-2 font-semibold'>Website</h2>
                    <p>Về trang web</p>
                    <p>Liên lạc</p>
                    <p>Thành tựu</p>
                    <p>Văn hóa</p>
                    <p>Blog</p>
                </div>

                <div className='mr-20 leading-7'>
                    <h2 className='text-lg pb-2 font-semibold'>Liên lạc với chúng tôi</h2>
                    <p>
                        <p>sakurajapanese@gmail.com</p>
                    </p>
                    <p>
                        (+84) 123 456 789
                    </p>
                    <p>
                        IE104, ĐH CNTT
                        <br />
                        Hồ Chí Minh, Việt Nam
                    </p>
                </div>

                <div>
                    <h2 className='text-lg pb-2 font-semibold'>Trở thành học viên ngay</h2>
                    <button className='bg-white text-cyan-800 px-10 py-3 font-semibold rounded-md'>Đăng ký tài khoản</button>
                </div>
            </div>

            <div className='ml-20 mb-4 mt-8 font-medium'>
                <p>© 2024 Sakura Japanese. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;