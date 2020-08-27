import React from 'react';
import Section from "../Components/Templates/Section";
import Input from "../Components/Blocks/Input";
import Button from "../Components/Blocks/Button";
import Form from "../Components/Templates/Form";
import FormFooter from "../Components/Blocks/Form-Footer";

function SignUp() {
    const formAttributes = [
        {
            type: 'text',
            text: 'Your First Name',
            placeholder: 'Write Your First Name',
            error: 'First Name Field Is Required'
        },
        {
            type: 'text',
            text: 'Your Last Name',
            placeholder: 'Write Your Last Name Here',
            error: 'Last Name Field Is Required'
        },
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
        <Section title={'Create New Account'}>
            <Form>
                <Input attributes={formAttributes} onChange={''}/>
                <Button text={'SIGN UP'} onClick={''}/>
                <FormFooter
                    question={'Have An Account'}
                    link={'/sign-in'} answer={'Sign In'}
                />
            </Form>
        </Section>
    );
}

export default SignUp;