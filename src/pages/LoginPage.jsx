import React from 'react'
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';
import loginLogo from '../../src/assets/login/login_logo.gif';
import logoWeb from '../../src/assets/login/logo_web.png'
import signupLogo from '../../src/assets/login/signup_logo.png'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { ConfigProvider } from 'antd';
import SocialMediaButton from '../components/SocialMediaButton';
import { motion } from 'framer-motion';

const LoginPage = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard');
  }
  const handleSignup = () => {
    navigate('/signup');  
  }
  const handleForgotPassword = () => {
    navigate('/forgot');  
  }
  return (
    <div className=' flex flex-row w-screen h-screen'  >
        <div className='flex basis-1/2 flex-col justify-center items-center '>
            <div className='flex flex-col justify-center gap-5 h-auto items-center w-[60%] '>
                <h1 className='text-3xl text-[#2B308B] font-bold mb-5 ' >Đăng Nhập</h1>
                <Input className='h-12'  placeholder="Email" />
                <Input.Password
                    className='h-12'
                    placeholder="Mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <p className='text-sm ml-auto text-[#2B308B] cursor-pointer' onClick={handleForgotPassword}>Quên mật khẩu</p>
                <div className='flex flex-row w-[100%] justify-between items-center'>
                    <p className='mr-3 text-sm'>Bạn chưa có tài khoản? <span  className='font-bold cursor-pointer text-[#2B308B]' onClick={handleSignup}>Đăng ký ngay</span></p>
                    <ConfigProvider
                            theme={{
                              components: {
                                Button: {
                                  colorPrimary: '#F490AF',
                                  colorPrimaryHover: '#FF0854',
                                }
                              },
                            }}
                      >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button className='ml-auto h-14 w-48 rounded-2xl text-xl font-bold  ' onClick={handleLogin} type="primary">Đăng nhập</Button>
                      </motion.div>
                    </ConfigProvider>
                </div>
                <div className='w-[90%]'>
                    <p className='text-xs text-[#9E988F] text-center mb-1'>Hoặc</p>
                    <div className="h-px bg-gray-300 my-4 w-[100%] mt-0"></div>
                </div>
                <SocialMediaButton platform="facebook" />
                <SocialMediaButton platform="google" />
                <SocialMediaButton platform="apple" />
            </div>
        </div>
        <div className='flex basis-1/2 flex-col justify-center items-center'>
            <img className='w-[40%] h-auto ' src={logoWeb} alt="Web Logo" />
            <img className='w-[80%] h-[80%]' src={loginLogo} alt="Login Logo" />
        </div>
    </div>
  )
}

export default LoginPage

