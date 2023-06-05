import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

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
                Open Modal
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
                    <div className="modalFooter">
                        <Form.Item label=" " colon={false}>
                            <Button type="default" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Form.Item>
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit">
                                LOGIN
                            </Button>
                        </Form.Item>
                    </div>
                </Modal>
            </Form>
        </>
    )
}

export default LoginModal
