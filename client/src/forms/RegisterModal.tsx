import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { mySchema } from './formSchema'
import { useFormik, FormikValues, FormikHelpers } from 'formik'
// import axios from 'axios'

import '../styles/formsStyling/loginAndRegister.scss'

const RegisterModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    type FormValues = {
        username: string
        email: string
        password: string
        confirmPassword: string
    }

    const onSubmit = (
        values: FormValues,
        actions: FormikHelpers<FormValues>
    ) => {
        console.log('submitted')
        actions.resetForm()
    }

    const registerForm = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: mySchema,
        onSubmit,
    })

    const isAllFieldsEmpty =
        !registerForm.values.username &&
        !registerForm.values.email &&
        !registerForm.values.password &&
        !registerForm.values.confirmPassword

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Register Modal
            </Button>
            <Modal
                title="REGISTER"
                open={isModalOpen}
                onCancel={handleCancel}
                className="registerModal"
                footer={null}
            >
                <Form
                    labelCol={{ flex: '80px' }}
                    labelAlign="left"
                    labelWrap
                    style={{ maxWidth: 600 }}
                    onFinish={registerForm.handleSubmit}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        className="formItem"
                        help={registerForm.errors.username}
                    >
                        <Input
                            placeholder="Username"
                            name="username"
                            allowClear
                            className="formInput"
                            value={registerForm.values.username}
                            onChange={registerForm.handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        className="formItem"
                        help={registerForm.errors.email}
                    >
                        <Input
                            placeholder="Email"
                            name="email"
                            allowClear
                            className="formInput"
                            value={registerForm.values.email}
                            onChange={registerForm.handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        className="formItem"
                        help={registerForm.errors.password}
                    >
                        <Input.Password
                            placeholder="Password"
                            name="password"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            className="formInput"
                            value={registerForm.values.password}
                            onChange={registerForm.handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm"
                        name="confirmPassword"
                        className="formItem"
                        help={registerForm.errors.confirmPassword}
                    >
                        <Input.Password
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            className="formInput"
                            value={registerForm.values.confirmPassword}
                            onChange={registerForm.handleChange}
                        />
                    </Form.Item>
                    <div className="modalFooter">
                        <Button
                            type="default"
                            onClick={handleCancel}
                            className="cancelButton"
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isAllFieldsEmpty || !registerForm.isValid}
                        >
                            REGISTER
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default RegisterModal
