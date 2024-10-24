import React from 'react';
import { Card, Button } from 'antd';
import { testsData } from '../data/testsData';
import { Link } from 'react-router-dom';

const Tests = () => {
  return (
    <div className='grid grid-cols-4 gap-6'>
      {testsData.map((test, index) => (
        <Card
          key={index}
          hoverable
          style={{
            width: 300,
            height: 420,
            marginBottom: '20px',
            borderRadius: '10px',
            position: 'relative'
          }}
          cover={<img alt="" src={test.img} />}
        >
          {test.status === 'Chưa làm' && (
            <p className='absolute bg-[#FF782D] top-40 right-0 py-4 px-6 font-semibold text-xl text-white rounded-tl-xl rounded-bl-xl'>
              {test.status}
            </p>
          )}

          {test.score !== undefined && (
            <p
              className={`absolute top-40 right-0 py-4 px-6 font-semibold text-xl text-white rounded-tl-xl rounded-bl-xl ${test.score >= 50 ? 'bg-green-500' : 'bg-[#FF0303]'
                }`}
            >
              {test.score}/100
            </p>
          )}

          <h2 className='font-bold text-2xl mt-6'>{test.title}</h2>
          <div className='mt-2 text-[16px] leading-8'>
            {test.desc}
          </div>

          {test.status === 'Chưa làm' ? (
            <Link to="/">
              <Button
                className='mt-2 w-[100%] py-6 bg-[#2B308B] text-[20px] font-semibold'
                type="primary"
              >
                Bắt đầu học
              </Button>
            </Link>
          ) : (
            <div className='grid grid-cols-2 gap-2'>
              <Button className='mt-2 py-6 text-[20px] font-semibold border-2'>
                Chi tiết
              </Button>
              <Button
                className='mt-2 py-6 bg-[#2B308B] text-[20px] font-semibold'
                type="primary"
              >
                Làm lại
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Tests;