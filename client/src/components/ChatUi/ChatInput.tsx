import React, { useState, useEffect, useRef } from 'react'
import { Input, Button } from 'antd'
import '../../styles/componentStyling/ChatLayoutStyle.scss'
import { SmileOutlined } from '@ant-design/icons'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

const { TextArea } = Input

// make it circular only to the left so it looks like its one div the entire thing

export default function ChatInput() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const emojiPickerRef = useRef<HTMLDivElement>(null)
    const [textareaValue, setTextareaValue] = useState('')

    const handleEmojiButtonClick = () => {
        setShowEmojiPicker(!showEmojiPicker)
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                emojiPickerRef.current &&
                !emojiPickerRef.current.contains(event.target as Node)
            ) {
                setShowEmojiPicker(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="chatInputWrapper">
            <TextArea
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                placeholder="Send message . . ."
                autoSize={{ minRows: 1, maxRows: 4 }}
                className="chatInputBox"
            ></TextArea>
            <Button
                icon={<SmileOutlined />}
                className="emojiButton chatInputButton"
                onClick={handleEmojiButtonClick}
            />
            <Button className="chatInputButton sendButton">Send</Button>
            <div
                className="emojiPicker"
                style={
                    showEmojiPicker ? { display: 'block' } : { display: 'none' }
                }
                ref={emojiPickerRef}
            >
                <Picker
                    data={data}
                    previewPosition="none"
                    onEmojiSelect={(e: any) => {
                        setShowEmojiPicker(false)
                        const appendedText = textareaValue + e.native
                        setTextareaValue(appendedText)
                    }}
                />
            </div>
        </div>
    )
}
