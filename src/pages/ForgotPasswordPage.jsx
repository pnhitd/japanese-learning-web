import React from 'react';
import { Input } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/forgotOTP');
      }

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col items-center mt-16 ">
        <h1 className="text-4xl font-bold text-[#2B308B] mb-8">Quên mật khẩu</h1>
        <p className="font-semibold mb-4 text-gray-600">Nhập vào địa chỉ email đã đăng ký</p>
        <Input size='large' placeholder="youremail@example.com" className="h-12 w-[400px] mb-6" />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[400px] h-12 bg-blue-500 text-white rounded-lg font-bold hover:bg-[#2B308B] " onClick={handleSubmit}> Gửi yêu cầu</motion.button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
