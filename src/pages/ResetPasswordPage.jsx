import React from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/login');
      }
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col items-center mt-16 gap-5 ">
        <h1 className="text-4xl font-bold text-[#2B308B] ">Đặt mật khẩu mới</h1>
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
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[400px] h-12 bg-blue-500 text-white rounded-lg font-bold hover:bg-[#2B308B] " onClick={handleSubmit}>Đặt lại mật khẩu</motion.button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
