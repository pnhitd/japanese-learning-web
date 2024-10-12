import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import coursesData from '../data/coursesData';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {coursesData.map((course, index) => (
                <Card
                    key={index}
                    hoverable
                    style={{
                        width: 300,
                        height: 420,
                        marginBottom: '20px',
                        borderRadius: '10px'
                    }}
                    cover={<img alt="" src={course.image} />}
                >
                    <div>
                        <h2 className='font-bold text-2xl'>{course.title}</h2>
                        <div className='mt-2 text-[16px] leading-8'>
                            {course.description}
                        </div>
                        <Link to='/free-resources/main-vocab'>
                            <Button
                                className='mt-2 w-[100%] py-6 bg-[#2B308B] text-[20px] font-semibold'
                                type="primary"
                            >
                                Bắt đầu học
                            </Button>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Courses
