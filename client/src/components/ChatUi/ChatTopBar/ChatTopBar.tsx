import React from 'react'
import '../../../styles/componentStyling/TopBarStyling.scss'
import { Button, Input } from 'antd'
import { BellOutlined, BellFilled } from '@ant-design/icons'

const { Search } = Input
// figure out what onSearch attribute does
const onSearch = (value: string) => console.log(value)

export default function ChatTopBar() {
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
                icon={<BellOutlined style={{ fontSize: '22px' }} />}
                className="notifications"
            ></Button>
        </div>
    )
}
