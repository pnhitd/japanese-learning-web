import React from 'react'
import lessonsData from '../data/lessonsData'
import { Link } from 'react-router-dom'

const Lessons = () => {
    return lessonsData.map((lesson, index) => (
        <Link to={lesson.link}>
            <div key={index} className='flex mb-5'>
                <img className='rounded-md' src={lesson.img} alt="" />
                <div className='ml-4'>
                    <h3 className='font-medium text-[16px]'>{lesson.title}</h3>
                    <p className='text-[12px] text-[#020202]'>{lesson.date}</p>
                </div>
            </div>
        </Link>
    ))
}

export default Lessons