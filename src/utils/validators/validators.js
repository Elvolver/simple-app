export const required = (value) => {
    return value ? undefined : 'Field is required'
}

export const maxLength = maxLength => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined