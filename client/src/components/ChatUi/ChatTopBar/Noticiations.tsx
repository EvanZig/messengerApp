import React, { useState } from 'react'
import { BellOutlined, BellFilled, SmileOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Button } from 'antd'
import type { MenuProps } from 'antd'
import '../../../styles/componentStyling/TopBarStyling.scss'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
]

export default function Noticiations() {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (hoverState: boolean) => {
        setIsHovered(hoverState)
    }
    return (
        <div>
            <Dropdown menu={{ items }} placement="bottomRight">
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
            </Dropdown>
        </div>
    )
}
