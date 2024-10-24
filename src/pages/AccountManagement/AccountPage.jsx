import React, { useState } from 'react'
import c3 from '../../assets/carouselImgs/c3.png'
import students from '../../assets/carouselImgs/StudentsProfile.png'
import { DatePicker, Input, Select, Image, Button } from 'antd';
import { Link } from 'react-router-dom';

const { TextArea } = Input;


const onOk = (value) => {
  console.log('onOk: ', value);
};

const options = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const AccountPage = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div className=''>
        <img className='h-[70%]' src={c3} alt="" />
        <img className='w-[70%] -mt-20 mx-auto' src={students} />

      </div>

      <h1 className='text-2xl font-bold mx-20 mt-4 my-10'>Cài đặt tài khoản</h1>
      <div className='mx-20'>
        <div className='grid grid-cols-2'>
          <div className='my-auto mx-auto border-gray-200 p-6 border-2'>
            <Image
              width={300}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <p className='text-center text-gray-500 mt-2'>*Định dạng ảnh: PNG, JEPG</p>
          </div>

          <div className='-mt-6'>
            <h4 className='font-semibold mb-2'>Họ và tên</h4>
            <TextArea placeholder="Trần Nhật Trường" autoSize />
            <div
              style={{
                margin: '24px 0',
              }}
            />

            <h4 className='font-semibold mb-2'>Tên đăng nhập</h4>
            <TextArea placeholder="tnt171@123" autoSize />
            <div
              style={{
                margin: '24px 0',
              }}
            />

            <h4 className='font-semibold mb-2'>Ngày tháng năm sinh</h4>
            <DatePicker
              showTime
              onChange={(value, dateString) => {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
              }}
              onOk={onOk}
            />

            <h4 className='font-semibold mb-2 mt-6'>Gmail</h4>
            <TextArea placeholder="trannhattruong@gmail.com" autoSize />
            <div
              style={{
                margin: '24px 0',
              }}
            />

            <h4 className='font-semibold mb-2'>Sở thích</h4>
            <Select
              mode="multiple"
              style={{
                width: '100%',
              }}
              placeholder="Please select"
              defaultValue={['Ước những điều không có thật', 'Ước được nghỉ học']}
              onChange={handleChange}
              options={options}
            />

            <Link to='/account/saved'>
              <Button className='text-[16px] font-semibold my-8 py-4 px-8' type="primary" shape="round">
                Lưu thay đổi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage