import React from 'react'
import Sidebar from './ChatUi/Sidebar'
import SearchBar from './ChatUi/SearchBar'
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
                <Layout>
                    <Header className="headerContainer">
                        <SearchBar />
                    </Header>

                    <Content className="chatSectionContainer">
                        <ChatSection />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
