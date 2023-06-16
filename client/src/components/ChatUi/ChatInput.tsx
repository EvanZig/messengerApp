import React from 'react'
import { Input, Button } from 'antd'
import '../../styles/componentStyling/ChatLayoutStyle.scss'
import { SmileOutlined } from '@ant-design/icons'

const { TextArea } = Input
// make it circular only to the left so it looks like its one div the entire thing

export default function ChatInput() {
    return (
        <div style={{ display: 'flex' }}>
            <TextArea
                placeholder="Send message . . ."
                autoSize={{ minRows: 1, maxRows: 4 }}
                className="chatInputBox"
            ></TextArea>
            <div className="chatInputButtons" style={{ display: 'flex' }}>
                <Button icon={<SmileOutlined />} className="emojiButton" />
                <Button>Send</Button>
            </div>
        </div>
    )
}
