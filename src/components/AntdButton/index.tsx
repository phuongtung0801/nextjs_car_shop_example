'use client';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};

const items = [
    {
        key: '1',
        label: '1st item',
    },
    {
        key: '2',
        label: '2nd item',
    },
    {
        key: '3',
        label: '3rd item',
    },
];

const AntdButton: React.FC = () => (
    <Space direction="horizontal">
        <Button
            type="primary"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
            primary
        </Button>
        <Button>secondary</Button>
        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
    </Space>
);

export default AntdButton;