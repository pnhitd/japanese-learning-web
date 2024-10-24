import React from 'react'
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HeaderBlog = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div>
            <div className='bg-fuji h-[300px] mt-4 text-white'>
                <h3 className='font-semibold text-6xl pt-16 pl-20'>Sakura’s BLOG</h3>
                <p className='text-md pt-4 pl-20'>
                    Hãy cùng khám phá trang blog đầy màu sắc
                    <br />
                    và có những trải nghiệm tuyệt vời nhất bạn nhé!
                </p>
                <Button className='bg-[#12084E] font-semibold text-white ml-20 mt-4 p-4 text-[16px]'>Khám phá ngay !</Button>
            </div>

            <div className='mt-6 flex justify-end mr-20'>
                <Input
                    className='ml-2 rounded-3xl w-[30%] py-2 text-[16px]'
                    placeholder="Tìm kiếm...."
                    onSearch={onSearch}
                    suffix={<SearchOutlined />}
                />
            </div>
        </div>
    )
}

export default HeaderBlog