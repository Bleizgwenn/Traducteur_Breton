export default function controlPseudo(pseudo) {
    const validatePseudoRegex = /[a-zA-Z]/
    return validatePseudoRegex.test(pseudo)
}