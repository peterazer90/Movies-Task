export const SignInAttrs = (inputsValid) => {
    return [
        {
            type: 'email',
            name: 'email',
            text: 'Your E-Mail',
            placeholder: 'Write Your E-Mail Here',
            isValid: inputsValid.email,
            error: 'E-mail Field Is Required'
        },
        {
            type: 'password',
            name: 'password',
            text: 'Your Password',
            placeholder: 'Write Your Password Here',
            isValid: inputsValid.password,
            error: 'Password Field Is Required'
        }
    ];
}

export const SignUpAttrs = (inputsValid, inputsData) => {
    return [
        {
            type: 'text',
            text: 'Your First Name',
            name: 'firstName',
            placeholder: 'Write Your First Name',
            isValid: inputsValid.firstName,
            value: inputsData.firstName,
            error: 'First Name Field Is Required'
        },
        {
            type: 'text',
            text: 'Your Last Name',
            name: 'lastName',
            placeholder: 'Write Your Last Name Here',
            isValid: inputsValid.lastName,
            value: inputsData.lastName,
            error: 'Last Name Field Is Required'
        },
        {
            type: 'email',
            text: 'Your E-Mail',
            name: 'email',
            placeholder: 'Write Your E-Mail Here',
            isValid: inputsValid.email,
            value: inputsData.email,
            error: 'E-mail Field Is Required'
        },
        {
            type: 'password',
            text: 'Your Password',
            name: 'password',
            placeholder: 'Write Your Password Here',
            isValid: inputsValid.password,
            value: inputsData.password,
            error: 'Password Field Is Required'
        }
    ];
}
