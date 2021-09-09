import {request, response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {ContactForm} from "../../utils/interfaces/ContactForm";
import MailComposer from "nodemailer/lib/mail-composer";

const mailgun = require("mailgun-js")


export const contactFormController = async (request: Request, response: Response): Promise<Response | undefined> => {
    try {

        // @ts-ignore
        const { contactFormName, contactFormEmail, contactFormSubject, contactFormMessage } = request.body

        console.log("request from body", contactFormEmail, contactFormSubject, contactFormMessage, contactFormName)

        // const contactForm: ContactForm = {
        //     contactFormEmail,
        //     contactFormSubject,
        //     contactFormMessage,
        //     contactFormName
        // }

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: process.env.MAIL_RECIPIENT,
            subject: contactFormEmail, contactFormSubject,
            text: contactFormMessage
        }

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})

            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: process.env.MAIL_RECIPIENT,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Email sent success",
                data: null
            }
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                // @ts-ignore
                return response.json(status)
            })
        })
    } catch (error) {
        const status: Status = {
            status: 500,
            // @ts-ignore
            message: error.message,
            data: null
        };
// @ts-ignore
        return response.json(status);
    }
}
