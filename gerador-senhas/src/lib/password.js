export const LOWER = "abcdefghijklmnopqrstuvwxyz";
export const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const NUM = "0123456789";
export const SYM = "!@#$%^&*()-_=+[]{};:,.<>/?";

export function buildAlphabet({ useLower, useUpper, useNumbers, useSymbols }) {
    let isLower = useLower ? LOWER : "";
    let isUpper = useUpper ? UPPER : "";
    let isNumbers = useNumbers ? NUM : "";
    let isSymbols = useSymbols ? SYM : "";
    return isLower + isUpper + isNumbers + isSymbols;

}

export function randomIndex(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive)

}

export function generatePassword(length, options) {
    const alphabet = buildAlphabet(options)
    if (!alphabet.length) {
        throw new Error("Alfabeto vazio")
    }
    let password = ""
    for (let i = 0; i < length; i++) {
        const index = randomIndex(alphabet.length)
        password += alphabet[index]
    }
    return password

}
export function estimateStrength(pwd, options) {
    const lengthCriteria = pwd.length >= 12;
    const varietyCriteria = [
        options.useLower,
        options.useUpper,
        options.useNumbers,
        options.useSymbols]
        .filter(Boolean).length >= 3;
    if (lengthCriteria && varietyCriteria) {
        return "Forte"
    }
    if (pwd.length >= 8) {
        return "Mediana"
    }
    return "Fraca"
}

