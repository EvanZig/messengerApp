import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

import '../styles/formsStyling/registerModalStyles.scss'

const RegisterModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Register"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className="registerModal"
            >
                <Input
                    placeholder="Username"
                    allowClear
                    className="formInput"
                />
                <Input placeholder="Email" allowClear className="formInput" />
                <Input.Password
                    placeholder="Input Password"
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="formInput"
                />
                <Input.Password
                    placeholder="Confirm Password"
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="formInput"
                />
            </Modal>
        </>
    )
}

export default RegisterModal
