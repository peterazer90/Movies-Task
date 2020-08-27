import React from 'react';
import Section from "../Components/Templates/Section";
import Form from "../Components/Templates/Form";
import Input from "../Components/Blocks/Input";
import Button from "../Components/Blocks/Button";
import FormFooter from "../Components/Blocks/Form-Footer";

function SignIn() {
    const formAttributes = [
        {
            type: 'email',
            text: 'Your E-Mail',
            placeholder: 'Write Your E-Mail Here',
            error: 'E-mail Field Is Required'
        },
        {
            type: 'password',
            text: 'Your Password',
            placeholder: 'Write Your Password Here',
            error: 'Password Field Is Required'
        }
    ]

    return (
        <Section title={'Sign In To Your Account'}>
            <Form>
                <Input attributes={formAttributes} onChange={''}/>
                <Button text={'SIGN IN'} onClick={''}/>
                <FormFooter
                    question={'Don\'t Have An Account'}
                    link={'/sign-up'} answer={'Create New Account'}
                />
            </Form>
        </Section>
    );
}

export default SignIn;