import React, {useContext, useState} from 'react';
import Section from "../Components/Templates/Section";
import Input from "../Components/Blocks/Input";
import Button from "../Components/Blocks/Button";
import Form from "../Components/Templates/Form";
import FormFooter from "../Components/Blocks/Form-Footer";
import UseForm from "../Hooks/Use-Form";
import {RegisteredUsersContext} from "../Hooks/Contexts";
import {useHistory} from "react-router-dom";
import Alert from "../Components/Elements/Alert";
import {SignUpAttrs} from "../Helpers/Helper-Form-Inputs-Attributes";
import {HelperOnChange} from "../Helpers/Helper-OnChange";
import {HelperTimeOut} from "../Helpers/Helper-TimeOut";

function SignUp() {
    const history = useHistory();
    const {registeredUsers, registeringUser} = useContext(RegisteredUsersContext);

    const [showRegisterAlert, setRegisterAlert] = useState(false);
    const [showRegisterSuccess, setRegisterSuccess] = useState(false);

    const [inputsData, setInputsData, inputsValid, setInputsValidation, isDisabled, setDisabled] = UseForm({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const onInputChange = ({target}) => {
        HelperOnChange(target, inputsData, setInputsData, inputsValid, setInputsValidation, setDisabled)
    }

    const onButtonClick = () => {
        const isRegisteredUser = registeredUsers.some(user => user.email === inputsData.email);
        if (!isRegisteredUser) {
            registeringUser([...registeredUsers, inputsData])
            setRegisterSuccess(true);
            HelperTimeOut(history.push('/sign-in'))
        } else setRegisterAlert(true)
    }
    return (
        <Section title={'Create New Account'}>
            <Form>
                {showRegisterAlert && <Alert text={'E-Mail Already Registered'}/>}
                {showRegisterSuccess && <Alert type={'success'} text={'Successfully Registered'}/>}

                <Input attributes={SignUpAttrs(inputsValid, inputsData)} onChange={onInputChange}/>
                <Button text={'SIGN UP'} onClick={onButtonClick} disabled={isDisabled}/>
                <FormFooter
                    question={'Have An Account'}
                    link={'/sign-in'} answer={'Sign In'}
                />
            </Form>
        </Section>
    );
}

export default SignUp;