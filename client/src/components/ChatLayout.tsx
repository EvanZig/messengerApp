import React from 'react'
import Sidebar from './ChatUi/ChatSidebar/Sidebar'
import ChatTopBar from './ChatUi/ChatTopBar/ChatTopBar'
import ChatSection from './ChatUi/ChatSection'
import { Layout } from 'antd'

const { Header, Sider, Content } = Layout

export default function ChatLayout() {
    return (
        <div className="chatLayoutWrapper">
            <Layout className="chatLayout">
                <Sider>
                    <Sidebar />
                </Sider>
                <Layout style={{ backgroundColor: 'black' }}>
                    <Header className="headerContainer">
                        <ChatTopBar />
                    </Header>

                    <Content className="chatSectionContainer">
                        <ChatSection />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
