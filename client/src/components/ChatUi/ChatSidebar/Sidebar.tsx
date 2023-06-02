import React, { useEffect } from 'react'
import type { MenuProps, TabsProps } from 'antd'
import { CloudOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, Tabs } from 'antd'
import '../../../styles/componentStyling/ChatSidebar/ChatSidebarStyling.scss'
import SidebarUserCard from './SidebarUserCard'

const items: MenuProps['items'] = [
    UserOutlined,
    CloudOutlined,
    ShopOutlined,
    SidebarUserCard,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
    className: 'sidebarMenuItems',
}))

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: <div className="sidebarTabStyling">All Conversations</div>,
        children: (
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={items}
                className="conversationsMenu"
            />
        ),
    },
    {
        key: '2',
        label: <div className="sidebarTabStyling">Favorites</div>,
        children: `Content of Tab Pane 2`,
    },
]

//
export default function Sidebar() {
    useEffect(() => {
        console.log(
            'use Conversations // default are gonna be 3 bots or 1 bot called bot evan'
        )
    }, [])
    return (
        <div className="chatSidebar">
            <Tabs
                defaultActiveKey="1"
                items={tabs}
                className="conversationTabs"
            />
        </div>
    )
}
