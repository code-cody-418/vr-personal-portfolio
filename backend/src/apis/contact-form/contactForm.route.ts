import { Router } from 'express';
import {contactFormValidator} from "./contactForm.validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {contactFormController} from "./contactForm.controller";


const { checkSchema } = require('express-validator')

export const contactFormRoute = Router();



contactFormRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(contactFormValidator)),
        // @ts-ignore
        contactFormController
    );
