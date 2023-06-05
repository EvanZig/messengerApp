import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

import '../styles/formsStyling/loginAndRegister.scss'

const RegisterModal: React.FC = () => {
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
                Open Register Modal
            </Button>
            <Form
                labelCol={{ flex: '80px' }}
                labelAlign="left"
                labelWrap
                style={{ maxWidth: 600 }}
            >
                <Modal
                    title="REGISTER"
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
                    <Form.Item label="Email" name="email" className="formItem">
                        <Input
                            placeholder="Email"
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
                            placeholder="Input Password"
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
                    <Form.Item
                        label="Confirm"
                        name="confirmPassword"
                        className="formItem"
                    >
                        <Input.Password
                            placeholder="Confirm Password"
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
                    <div className="modalFooter">
                        <Form.Item label=" " colon={false}>
                            <Button type="default" onClick={handleCancel}>
                                CANCEL
                            </Button>
                        </Form.Item>
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit">
                                REGISTER
                            </Button>
                        </Form.Item>
                    </div>
                </Modal>
            </Form>
        </>
    )
}

export default RegisterModal
