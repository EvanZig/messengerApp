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
        label: `Tab 1`,
        children: (
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={items}
                style={{ overflow: 'auto', maxHeight: 'calc(100vh - 64px)' }}
            />
        ),
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
    },
]

export default function Sidebar() {
    return (
        <div className="chatSidebar" style={{ overflow: 'hidden' }}>
            <Tabs
                defaultActiveKey="1"
                items={tabs}
                className="conversationTabs"
            />
        </div>
    )
}
