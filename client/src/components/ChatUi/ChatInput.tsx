import React from 'react'
import { Input, Button } from 'antd'
import '../../styles/componentStyling/ChatLayoutStyle.scss'

const { TextArea } = Input

export default function ChatInput() {
    return (
        <div style={{ display: 'flex' }}>
            <TextArea
                placeholder="Send message"
                autoSize={{ minRows: 1, maxRows: 4 }}
                className="chatInputBox"
            ></TextArea>
            <Button> emoji </Button>
            <Button>Send</Button>
        </div>
    )
}
