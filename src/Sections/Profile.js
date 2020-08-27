import React, {useContext, useState} from 'react';
import {RegisteredUsersContext, UserObjectContext} from "../Hooks/Contexts";
import Form from "../Components/Templates/Form";
import Alert from "../Components/Elements/Alert";
import Input from "../Components/Blocks/Input";
import Button from "../Components/Blocks/Button";
import Section from "../Components/Templates/Section";
import UseForm from "../Hooks/Use-Form";
import {SignUpAttrs} from "../Helpers/Helper-Form-Inputs-Attributes";
import {HelperOnChange} from "../Helpers/Helper-OnChange";

function Profile() {
    const {registeredUsers, registeringUser} = useContext(RegisteredUsersContext);
    const {userObject, setUserObject} = useContext(UserObjectContext);

    const [showUpdatedAlert, setUpdatedAlert] = useState(false);
    const [inputsData, setInputsData, inputsValid, setInputsValidation, isDisabled, setDisabled] = UseForm({
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        password: userObject.password
    });


    const onInputChange = ({target}) => {
        HelperOnChange(target, inputsData, setInputsData, inputsValid, setInputsValidation, setDisabled)
    }

    const onButtonClick = () => {
        const users = registeredUsers.filter(user => user.email !== inputsData.email);
        setUserObject(inputsData);
        registeringUser([...users, inputsData]);
        setUpdatedAlert(true);
    }
    return (
        <Section title={'Edit Your Profile'}>
            <Form>
                {showUpdatedAlert && <Alert type={'success'} text={'Successfully Updated'}/>}
                <Input attributes={SignUpAttrs(inputsValid, inputsData)} onChange={onInputChange}/>
                <Button text={'UPDATE'} onClick={onButtonClick} disabled={isDisabled}/>
            </Form>
        </Section>
    );
}

export default Profile;