import React, { useState } from 'react';
import Lessons from '../../components/Lessons';
import vocab1 from '../../assets/lessons/vocab1.png';
import { Button, Flex, Modal } from 'antd';
import { IoMdDownload } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

const MainReadingPaidPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='mx-10 my-6'>
      <div className='flex'>
        <div className='max-w-[70%]'>
          <Link className='flex items-center mb-2' to='/free-resources'>
            <AiOutlineArrowLeft />
            <p className='font-semibold text-lg ml-2'>Quay lại</p>
          </Link>
          <img className='float-left mr-4' src={vocab1} alt="" />
          <div className='leading-6'>
            <h1 className='font-bold text-3xl'>Từ vựng</h1>
            <p className='mt-2'>
              Với phần phát âm, tốt nhất bạn nên chuẩn hoá ngay từ đầu, đừng bỏ qua vì nó khó hay nghĩ nó không quan trọng...
            </p>
          </div>
          <Flex className='justify-end mt-4 mb-10' gap="small" wrap>
            <Button className='rounded-2xl px-8' type="primary" onClick={showModal}>
              <p className='font-semibold'>Học</p>
            </Button>
            <Button className='rounded-2xl px-8'>
              <p className='font-semibold'>PDF</p>
              <IoMdDownload className='w-3 h-3' />
            </Button>
          </Flex>
        </div>
        <div className='ml-10 mt-10'>
          <Lessons />
        </div>
      </div>


      <Modal
        title={<span className="text-lg font-semibold">Đọc hiểu</span>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cart" type="primary" onClick={handleOk}>
            Thêm vào giỏ hàng
          </Button>,
          <Button key="buy" onClick={handleOk}>
            Mua ngay
          </Button>
        ]}
      >
        <p>😢 Tiếc quá! Bạn chưa mua học phần này</p>
        <p>Khóa học bao gồm:</p>
        <ul>
          <li>Hướng dẫn cách làm bài trong kỳ thi JLPT</li>
          <li>Cung cấp các từ vựng mới trong bài đọc</li>
        </ul>
        <p>Giá: <b>200.000 VND</b></p>
      </Modal>
    </div>
  );
};

export default MainReadingPaidPage;
