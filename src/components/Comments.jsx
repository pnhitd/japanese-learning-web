import React from 'react'
import { Card, Divider } from 'antd';
import { FaStar } from "react-icons/fa";
import vector from '../assets/Vector.png'
import commentsData from '../data/commentsData';

const Comments = () => {
  return (
    <div>
      <div className='flex gap-4 justify-center py-6'>
        {commentsData.map((comment, index) => (
          <Card
            style={{
              width: 380,
            }}
            key={index}
          >
            <h1 key={index} className='font-bold text-[27px] pb-2 text-start'>{comment.title}</h1>
            <img className='pb-2' src={vector} alt="" />
            <p className='text-justify'>{comment.desc}</p>
            <Divider />
            <div className='flex justify-start justify-self-start'>
              <img src={comment.avatar} alt="" />
              <div className='pl-2'>
                <p className='text-left font-semibold'>{comment.author}</p>
                <div className='flex gap-1 pt-2'>
                  <FaStar className='text-yellow-300' />
                  <FaStar className='text-yellow-300' />
                  <FaStar className='text-yellow-300' />
                  <FaStar className='text-yellow-300' />
                  <FaStar className='text-yellow-300' />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Comments