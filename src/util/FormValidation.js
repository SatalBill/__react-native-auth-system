export const isUsernameValid = (username) => {

   return !username.includes(' ');
};

export const isEmailValid = (email) => {

    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
};

export const isPasswordValid = (password) => {

    //add custom valdation
    return true;
};

export const doPasswordMatch = (password, confirmPassword) => {

    return password === confirmPassword;
};

export const isFormValid = (state) => {

    let { userNameField, emailField, passwordField, confirmPasswordField } = state;

    if ((userNameField.isValid 
        && emailField.isValid 
        && passwordField.isValid 
        && confirmPasswordField.isValid)

            && 
            
        (userNameField.value !== '' 
        && emailField.value !== ''
        && passwordField.value !== ''
        && confirmPasswordField.value !== '')) {

        console.log('Full form is valid');
        return false;
    } else {
        
        console.log('Full form is NOT valid.');
        return true;
    };
}