import React from 'react';
import { Input } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordOtpPage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/resetPassword');
      }

    const onChange = (text) => {
        console.log('onChange:', text);
      };
      const onInput = (value) => {
        console.log('onInput:', value);
      };
      const sharedProps = {
        onChange,
        onInput,
      };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col items-center mt-16 ">
        <h1 className="text-4xl font-bold text-[#2B308B] mb-8">Nhập mã OTP</h1>
        <p className="font-semibold mb-4 text-gray-600">Kiểm tra mã OTP được gửi vào email của bạn!</p>
        <div className='mb-7 p-5'>
            <Input.OTP size='large' length={6} {...sharedProps} style={{ width: '400px', fontWeight: 'bold' }}  />
        </div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[400px] h-12 bg-blue-500 text-white rounded-lg font-bold hover:bg-[#2B308B] " onClick={handleSubmit}> Gửi</motion.button>
      </div>
    </div>
  );
};

export default ForgotPasswordOtpPage;
