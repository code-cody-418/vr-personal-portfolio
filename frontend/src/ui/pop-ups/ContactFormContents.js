import React from "react";
import {FormDebugger} from "./FormDebugger";


export const ContactFormContents = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    // console.log("status", status.type, status.message)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="contactFormName">Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="contactFormName"
                            type="text"
                            value={values.contactFormName}
                            placeholder="Enter Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.contactFormName && touched.contactFormName && (
                            <div className="alert alert-danger">
                                {errors.contactFormName}
                            </div>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="contactFormEmail">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="contactFormEmail"
                            type="email"
                            value={values.contactFormEmail}
                            placeholder="Enter Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.contactFormEmail && touched.contactFormEmail && (
                            <div className="alert alert-danger">
                                {errors.contactFormEmail}
                            </div>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="contactFormSubject">Subject</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="contactFormSubject"
                            type="text"
                            value={values.contactFormSubject}
                            placeholder="Enter Subject"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.contactFormSubject && touched.contactFormSubject && (
                            <div className="alert alert-danger">
                                {errors.contactFormSubject}
                            </div>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="contactFormMessage">Message</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="contactFormMessage"
                            type="text"
                            value={values.contactFormMessage}
                            placeholder="Enter Message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.contactFormMessage && touched.contactFormMessage && (
                            <div className="alert alert-danger">
                                {errors.contactFormMessage}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn" type="submit">Submit</button>
                </div>
                <FormDebugger {...props} />
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
