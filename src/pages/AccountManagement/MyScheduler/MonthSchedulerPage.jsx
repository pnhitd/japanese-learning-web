import React from 'react';
import { Carousel, Calendar } from 'antd';
import c1 from '../../../assets/carouselImgs/c1.png'
import c2 from '../../../assets/carouselImgs/c2.png'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';


const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '10px'
};

const getListData = (value) => {
    let listData = [];
    switch (value.date()) {
        case 8:
            listData = [
                {
                    time: '09:00-10:00',
                    title: 'JLPT N3 - Sửa đề 1',
                    teacher: 'Đào Xuân Phương',
                    img: '',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    time: '09:00-10:00',
                    title: 'JLPT N3 - Sửa đề 1',
                    teacher: 'Đào Xuân Phương',
                    img: '',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const MonthSchedulerPage = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <div className='bg-pink-100 p-2'>
                        <h2 className='font-bold'>{item.time}</h2>
                        <h2 className='font-semibold'>Tiết học: {item.title}</h2>
                        <p className='font-semibold'>GV: {item.teacher}</p>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return (
        <div className='mt-4 mx-10'>
            <Carousel>
                <div>
                    <img style={contentStyle} src={c1} alt="" />
                </div>
                <div>
                    <img style={contentStyle} src={c2} alt="" />
                </div>
            </Carousel>

            <div className='text-center mb-10 mx-10'>
                <h1 className='font-bold text-[55px]'>Lịch học của bạn</h1>
                <p className='text-[18px] leading-[25px] text-[#696E82]'>
                    Cùng nhau xem lịch học của bạn nhé!
                    <br />
                    Đừng bỏ lỡ bất kỳ buổi học nào nhé vì buổi học nào cũng rất quan trọng đấy!
                </p>
            </div>

            <div className='flex justify-between mb-4'>
                <h2 className='font-semibold text-xl'>Lịch học trong tuần</h2>
                <div>
                    <div className='flex'>
                        <h2 className='font-semibold text-xl'>07, tháng 6, 2024</h2>
                        <IoChevronBackCircleOutline className='w-6 h-6 my-auto ml-2' />
                        <IoChevronBackCircleOutline className='rotate-180 w-6 h-6 my-auto ml-1' />
                    </div>
                </div>
                <Link to='/account/scheduler'>
                    <div className='flex'>
                        <CiHeart className='w-6 h-6 text-blue-600 my-auto' />
                        <p className='my-auto ml-2 text-blue-600'>Xem lịch học hôm nay </p>
                    </div>
                </Link>
            </div>

            <Calendar cellRender={cellRender} />;
        </div>
    )

};

export default MonthSchedulerPage;