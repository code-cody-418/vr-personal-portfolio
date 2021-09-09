export const contactFormValidator = {
    contactFormName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Name is required',
        }
    },
    contactFormEmail: {
        isEmail: {
            errorMessage: 'Please put in a valid email address'
        },
        normalizeEmail: true,
        trim: true
    },
    contactFormSubject: {
        isLength: {
            errorMessage: 'The subject cannot be longer than 200 characters',
            options: { max: 500}
        },
        trim: true,
        escape: true
    },
    contactFormMessage: {
        isLength: {
            errorMessage: 'The message cannot be longer than 2000',
            options: { max: 2000}
        },
        trim: true,
        escape: true
    },
}
