import React, { useState } from 'react'
import '../../../styles/componentStyling/TopBarStyling.scss'
import { Button, Input } from 'antd'
import { BellOutlined, BellFilled } from '@ant-design/icons'

const { Search } = Input
// figure out what onSearch attribute does
const onSearch = (value: string) => console.log(value)

export default function ChatTopBar() {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (hoverState: boolean) => {
        setIsHovered(hoverState)
    }

    return (
        <div className="chatTopBar">
            <Search
                placeholder="Search for people"
                onSearch={onSearch}
                enterButton
                className="chatSearchBar"
            />
            <Button
                type="primary"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                icon={
                    isHovered ? (
                        <BellFilled style={{ fontSize: '24px' }} />
                    ) : (
                        <BellOutlined style={{ fontSize: '24px' }} />
                    )
                }
                className="notifications"
                shape="circle"
            ></Button>
        </div>
    )
}
