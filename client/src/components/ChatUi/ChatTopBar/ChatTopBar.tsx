import React, { useState } from 'react'
import '../../../styles/componentStyling/TopBarStyling.scss'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Notifications from './Noticiations'
import TopBarProfile from './TopBarProfile'

const { Search } = Input

// maybe make this another component with props to pass src so i can reuse it in the future maybe for practice maybe maybe.
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
            <Notifications />
            <TopBarProfile />
        </div>
    )
}
