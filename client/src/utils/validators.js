export const usernameValidator = (username) => {
    // Username must be 3-16 characters, only letters, numbers, underscores
    const valid = /^[a-zA-Z0-9_]{3,16}$/.test(username);
    if (!valid) {
        return { isValid: false, errorMessage: "Username Invalid" };
    }
    return { isValid: true, errorMessage: "" };
}
export const userPasswordValidator = (password) => {
    // Password must be at least 8 characters, contain letters and numbers
    const valid = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    if (!valid) {
        return { isValid: false, errorMessage: "Password Invalid" };
    }
    return { isValid: true, errorMessage: "" };
}   