import React from 'react'
import ChatInput from './ChatInput'

export default function ChatSection() {
    return (
        <div className="chatSection">
            <div className="chatContent">Main Chat Section between users</div>
            <ChatInput />
        </div>
    )
}
