import React, {useContext, useState} from 'react';
import Section from "../Components/Templates/Section";
import Form from "../Components/Templates/Form";
import Input from "../Components/Blocks/Input";
import Button from "../Components/Blocks/Button";
import FormFooter from "../Components/Blocks/Form-Footer";
import UseForm from "../Hooks/Use-Form";
import {LoggedInUserContext, RegisteredUsersContext, UserObjectContext} from "../Hooks/Contexts";
import {useHistory} from 'react-router-dom';
import Alert from "../Components/Elements/Alert";
import {SignInAttrs} from "../Helpers/Helper-Form-Inputs-Attributes";
import {HelperOnChange} from "../Helpers/Helper-OnChange";

function SignIn() {
    const history = useHistory();
    const {registeredUsers} = useContext(RegisteredUsersContext);
    const {loggingIn} = useContext(LoggedInUserContext);
    const {setUserObject} = useContext(UserObjectContext);
    const [emailAlert, setEmailAlert] = useState(false);
    const [passAlert, setPassAlert] = useState(false);

    const [inputsData, setInputsData, inputsValid, setInputsValidation, isDisabled, setDisabled] = UseForm({
        email: '',
        password: ''
    });

    const onInputChange = ({target}) => {
        HelperOnChange(target, inputsData, setInputsData, inputsValid, setInputsValidation, setDisabled)
    }

    const onButtonClick = () => {
        const emailStored = registeredUsers.some(user => user.email === inputsData.email)
        const correctPassword = registeredUsers.some(user => user.email === inputsData.email && user.password === inputsData.password)
        if (emailStored && correctPassword) {
            loggingIn(true);
            const getUserObject = registeredUsers.find(userObj => userObj.email === inputsData.email);
            setUserObject(getUserObject);
            history.push('/')
        } else if (!correctPassword && emailStored) setPassAlert(true);
        else setEmailAlert(true);
    }

    return (
        <Section title={'Sign In To Your Account'}>
            <Form>
                {emailAlert && <Alert text={'E-Mail Is Not Registered'}/>}
                {passAlert && <Alert text={'Password Is Not Correct'}/>}
                <Input attributes={SignInAttrs(inputsValid)} onChange={onInputChange}/>
                <Button text={'SIGN IN'} onClick={onButtonClick} disabled={isDisabled}/>
                <FormFooter
                    question={'Don\'t Have An Account'}
                    link={'/sign-up'} answer={'Create New Account'}
                />
            </Form>
        </Section>
    );
}

export default SignIn;