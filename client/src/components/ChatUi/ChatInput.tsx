import React from 'react'
import { Input } from 'antd'
import '../../styles/componentStyling/ChatLayoutStyle.scss'

const { TextArea } = Input

export default function ChatInput() {
    return (
        <div>
            <TextArea
                placeholder="Send message"
                autoSize={{ minRows: 1, maxRows: 4 }}
                className="chatInputBox"
            ></TextArea>
        </div>
    )
}
