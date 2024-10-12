import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Lessons from '../components/Lessons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchingPage = () => {
  return (
    <div>
      <div className='flex justify-center justify-items-center justify-self-center ml-10'>
        <h1 className='font-extrabold text-[40px] mr-6'>Tra cứu</h1>
        <Search
          placeholder="Tra cứu từ vựng, kanji, ngữ pháp..."
          onSearch={onSearch}
          style={{
            width: 700,
            borderRadius: '50px'
          }}
        />
      </div>

      <div>
        <Lessons />
      </div>
    </div>
  )
}

export default SearchingPage

