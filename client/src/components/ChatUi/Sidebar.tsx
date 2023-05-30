import React from 'react'
import type { MenuProps } from 'antd'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Menu, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import '../../styles/componentStyling/ChatSidebarStyling.scss'

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
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
