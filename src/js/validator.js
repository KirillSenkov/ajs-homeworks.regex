export default class Validator {
    validateUsername(username) {
            return !/[^a-z0-9-_]/i.test(username)
                && !/\d{3}/.test(username)
                && !/(^[\d-_]+)|([\d-_]+$)/.test(username)
    }
}
