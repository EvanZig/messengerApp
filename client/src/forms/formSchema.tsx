import * as yup from 'yup'

const passwordSchema = /^(?=.*[A-Z])(?=.*[0-9]).{5,}$/
const passwordError =
    'five characters minimum \none number\none uppercase character'

const usernameSchema = /^[A-Za-z_]+$/
const usernameError = 'Only underscores ( _ )  allowed'

export const mySchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'must be at least 5 characters')
        .max(20, '20 characters maximum')
        .matches(usernameSchema, { message: usernameError })
        .required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .min(8)
        .matches(passwordSchema, { message: passwordError })
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required(),
})

const passwordErrorsArray = passwordError.split('\n')

export const passwordErrors = passwordErrorsArray.map((value, index) => {
    return (
        <span key={index}>
            ❌{value} <br />
        </span>
    )
})
