import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

import '../styles/formsStyling/loginAndRegister.scss'

const LoginModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Login Modal
            </Button>
            <Form
                labelCol={{ flex: '80px' }}
                labelAlign="left"
                labelWrap
                style={{ maxWidth: 600 }}
            >
                <Modal
                    title="LOGIN"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    className="registerModal"
                    footer={null}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        className="formItem"
                    >
                        <Input
                            placeholder="Username"
                            allowClear
                            className="formInput"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        className="formItem"
                    >
                        <Input.Password
                            placeholder="Password"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            className="formInput"
                        />
                    </Form.Item>
                    <div className="modalFooter" style={{ marginTop: '50px' }}>
                        <Button
                            type="default"
                            onClick={handleCancel}
                            style={{ marginRight: '-10px' }}
                        >
                            CANCEL
                        </Button>
                        <Button type="primary" htmlType="submit">
                            LOGIN
                        </Button>
                    </div>
                </Modal>
            </Form>
        </>
    )
}

export default LoginModal
