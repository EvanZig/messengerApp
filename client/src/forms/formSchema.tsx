import * as yup from 'yup'

const passwordSchema = /^(?=.*[A-Z])(?=.*[0-9]).{5,}$/
const passwordError =
    'must be 6 characters with at least 1 number and uppercase character'

const usernameSchema = /^[A-Za-z_]+$/
const usernameError = 'Only underscores ( _ ) allowed'

export const mySchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'must be at least 5 characters')
        .max(20, '20 characters maximum')
        .matches(usernameSchema, { message: usernameError }),
    email: yup.string().email(),
    password: yup
        .string()
        .min(6)
        .matches(passwordSchema, { message: passwordError }),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match'),
})
