export const HelperOnChange =
    (target, inputsData, setInputsData, inputsValid, setInputsValidation, setDisabled) => {
    const {name, value} = target;
    const formData = {...inputsData}
    const formValid = {...inputsValid}

    formData[name] = value;
    setInputsData(formData);

    (!formData[name]) ? formValid[name] = false : formValid[name] = true;
    setInputsValidation(formValid);
    const checkEmptyInputs = Object.values(formData).includes('');
    setDisabled(checkEmptyInputs);
};