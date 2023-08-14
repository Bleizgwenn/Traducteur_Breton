export default function controlEmail(email) {
    const validateEmailRegex = /^\S+@\S+\.\S+$/
    return validateEmailRegex.test(email)
}