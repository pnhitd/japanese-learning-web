import React from 'react'
import { ShoppingCartOutlined, MessageOutlined, NotificationOutlined, DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import Avatar from '../assets/avatars/avatar.png'
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: false,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    icon: <Link to='/account'><UserOutlined /></Link>,
    label: 'Profile',
  },
  {
    key: '3',
    icon: <LogoutOutlined />,
    label: 'Logout',
  }
];

const Header = () => {
  return (
    <div className='flex justify-end mt-4'>
      <ShoppingCartOutlined className='text-2xl mr-4' />
      <MessageOutlined className='text-xl mr-4' />
      <NotificationOutlined className='text-xl mr-4' />
      <div className='flex pr-10'>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img className='w-10 h-10' src={Avatar} alt="" />
              <p className='my-auto mr-2 ml-2 font-medium'>Trần Nhật Trường</p>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
