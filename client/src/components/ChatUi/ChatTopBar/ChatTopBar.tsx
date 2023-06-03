import React, { useState } from 'react'
import '../../../styles/componentStyling/TopBarStyling.scss'
import { Button, Input } from 'antd'
import { BellOutlined, BellFilled, UserOutlined } from '@ant-design/icons'

const { Search } = Input

interface Props {
    src: string
    alt: string
}

const appLogo: Props = {
    src: require('../../../images/blackAppLogo.png'),
    alt: 'messengerAppLogo',
}

// figure out what onSearch attribute does
const onSearch = (value: string) => console.log(value)

export default function ChatTopBar() {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (hoverState: boolean) => {
        setIsHovered(hoverState)
    }

    return (
        <div className="chatTopBar">
            <img
                src={appLogo.src}
                alt={appLogo.alt}
                width={200}
                style={{ borderRadius: '12px' }}
            />
            <Search
                placeholder="Search for people"
                onSearch={onSearch}
                enterButton
                className="chatSearchBar searchFont"
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
            <Button
                type="primary"
                icon={<UserOutlined style={{ fontSize: '24px' }} />}
                className="userProfileTopbar"
                shape="circle"
            ></Button>
        </div>
    )
}
