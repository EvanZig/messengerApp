import React from 'react'
import { Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined, SmileOutlined } from '@ant-design/icons'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                Profile Menu disabled item
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
]
export default function TopBarProfile() {
    return (
        <div>
            <Dropdown menu={{ items }} placement="bottomRight">
                <Button
                    type="primary"
                    icon={<UserOutlined style={{ fontSize: '24px' }} />}
                    className="userProfileTopbar"
                    shape="circle"
                ></Button>
            </Dropdown>
        </div>
    )
}
