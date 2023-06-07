import React, { useState } from 'react'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import '../../../styles/componentStyling/ChatSidebar/SideBarUserCard.scss'

export default function SidebarUserCard() {
    const [userOnline, setUserOnline] = useState(false)
    const dotColor = {
        backgroundColor: userOnline ? 'green' : 'red',
        display: 'flex',
        marginLeft: '-20px',
    }
    return (
        <div style={{ display: 'flex' }}>
            <Badge dot style={dotColor}>
                <Avatar
                    size={45}
                    icon={<UserOutlined />}
                    style={{ marginLeft: '-20px' }}
                />
            </Badge>
            <div className="userCardWrapper">
                <div className="userCardUsername"> Username </div>
                <div className="lastMessageSent"> Last message sent </div>
            </div>
        </div>
    )
}
