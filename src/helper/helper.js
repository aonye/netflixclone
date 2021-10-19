function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function configTitle(string) {
    let temp = string.split('-');
    const arr = temp.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return arr.join(' ');
}

function customMsg(code) {
    switch (code) {
        case ('auth/user-not-found'): {
            return 'We cannot find an account with this email address. Please try again or register.';
        }
        case ('auth/wrong-password'): {
            return 'Password incorrect. Please try again.';
        }
        case ('auth/email-already-in-use'): {
            return 'Email already in use. Please sign up with a different email address.';
        }
        case ('auth/weak-password'): {
            return 'Password must be at least 6 characters.';
        }
        case ('auth/invalid-email'): {
            return 'Please enter a valid email address.';
        }
        case ('auth/missing-email'): {
            return 'Please enter an email address.';
        }
        case ('auth/confirm-pw-error'): {
            return 'Passwords do not match. Please try again.';
        }
        case ('auth/no-name'): {
            return 'Please enter your name.';
        }
        case ('auth/sign-in-success'): {
            return 'Sign in successful. Welcome back.';
        }
        case ('auth/sign-up-success'): {
            return 'Sign up successful. Welcome to Netflix.';
        }
        case ('auth/no-password'): {
            return 'Please enter a password.';
        }
        case ('auth/no-confirmpw'): {
            return 'Please confirm password.';
        }
        default: {
            return `${code}`;
        }
    }
}

function checkPwMatch(pw1, pw2) {
    return pw1 === pw2 ? true : false;
}

export { capitalizeFirstLetter, configTitle, customMsg, checkPwMatch };