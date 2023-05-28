import React from 'react'
import Sidebar from './ChatUi/Sidebar'
import SearchBar from './ChatUi/SearchBar'
import ChatSection from './ChatUi/ChatSection'
import { Layout, Space } from 'antd'

const { Header, Footer, Sider, Content } = Layout

export default function ChatLayout() {
    return (
        <div className="chatLayout">
            <Layout>
                <Sider className="sideBarContainer">
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
