import React, {useState} from 'react';

function UseForm(props) {
    const inputs = {...props};
    const inputValidation = {...props};
    Object.keys(inputValidation).forEach(key => inputValidation[key] = true)

    const [inputsData, setInputsData] = useState({...inputs})
    const [inputsValid, setInputsValidation] = useState({...inputValidation})
    const [isDisabled, setDisabled] = useState(true);

    return [inputsData, setInputsData, inputsValid, setInputsValidation, isDisabled, setDisabled];
}

export default UseForm;