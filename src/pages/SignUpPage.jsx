import React from 'react'
import { useNavigate } from 'react-router-dom';
import signupLogo from '../../src/assets/login/signup_logo.png'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { motion } from 'framer-motion';
import { ConfigProvider } from 'antd';

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const handleSignup = () => {
    navigate('/login');  
  }
  return (
    <div className=' flex flex-row w-screen h-screen '  >
        <div className='flex basis-1/2 flex-col justify-center items-center border-blue-500'>   
            <img className='w-auto h-[80%] border-2' src={signupLogo} alt="Login Logo" />
        </div>
        <div className='flex basis-1/2 flex-col justify-center items-center'>
            <div className='flex flex-col justify-center gap-5 w-3/5 h-auto items-center'>
                <h1 className='text-3xl text-[#2B308B] font-bold mb-5 ' >Đăng ký</h1>
                <Input className='h-12'  placeholder="Họ và tên" />
                <Input className='h-12'  placeholder="Email" />
                <Input.Password
                    className='h-12'
                    placeholder="Mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Input.Password
                    className='h-12'
                    placeholder="Xác nhận mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <div className='flex flex-row w-[100%] justify-between items-center'>
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
                          <Button className='ml-auto h-14 w-48 rounded-2xl text-xl font-bold  ' onClick={handleSignup} type="primary">Đăng ký</Button>
                      </motion.div>
                    </ConfigProvider>
                    <p className='mr-3 text-sm'>Bạn đã có tài khoản? <span className='font-bold cursor-pointer text-[#2B308B]'  onClick={handleLogin}>Đăng nhập ngay</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage