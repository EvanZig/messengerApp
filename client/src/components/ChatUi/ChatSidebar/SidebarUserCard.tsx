import React from 'react'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function SidebarUserCard() {
    return (
        <div>
            <Badge dot>
                <Avatar size={45} icon={<UserOutlined />} />
            </Badge>
        </div>
    )
}
