import React, { useState } from 'react'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function SidebarUserCard() {
    const [userOnline, setUserOnline] = useState(false)
    const dotColor = {
        backgroundColor: userOnline ? 'green' : 'red',
        display: 'flex',
        marginLeft: '-20px',
    }
    return (
        <div>
            <Badge dot style={dotColor}>
                <Avatar
                    size={45}
                    icon={<UserOutlined />}
                    style={{ marginLeft: '-20px' }}
                />
            </Badge>
            <div>Content of nav 4</div>
        </div>
    )
}
