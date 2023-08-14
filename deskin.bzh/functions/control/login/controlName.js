export default function controlName(name) {
    const validateNameRegex = /[a-zA-Z]/
    return validateNameRegex.test(name)
}