import React from 'react'
import Sidebar from './ChatUi/Sidebar'
import SearchBar from './ChatUi/SearchBar'
import ChatSection from './ChatUi/ChatSection'

export default function ChatLayout() {
    return (
        <div>
            <SearchBar />
            <ChatSection />
            <Sidebar />
        </div>
    )
}
