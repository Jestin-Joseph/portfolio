import React, { useState } from 'react'
import styles from './ContactForm.module.scss'

import JButton from '../JButton/JButton'
import AlertBanner from '../AlertBanner/AlertBanner';



function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [showAlert, setShowAlert] = useState({
        show: false,
        message: "",
        type: ""
    })


    const handleFormInput = (type, value) => {

        setFormData({
            ...formData,
            [type]: value
        })

    }

    function handleAlert(message, type) {
        setShowAlert({
            show: true,
            message,
            type
        })

        setTimeout(() => {
            setShowAlert({
                show: false,
                message: "",
                type: ""
            });
        }, 3000)
    }

    const W3_URL = "https://api.web3forms.com/submit";
    const ACCESS_KEY = "86f38207-64b9-424e-94e4-eda5603a22db";

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const submitForm = async () => {
        if (!formData.firstName) {
            return handleAlert("Please enter First Name", "error");
        } else if (!formData.lastName) {
            return handleAlert("Please enter Last Name", "error");
        } else if (!formData.email) {
            return handleAlert("Please enter Email", "error");
        } else if (!formData.message) {
            return handleAlert("Please enter your Message", "error")
        }

        if (!isValidEmail(formData?.email)) {
            return handleAlert("Please check if your email is the correct format", "error")
        }

        const payLoad = new FormData();
        payLoad.append("name", formData?.firstName + " " + formData.lastName);
        payLoad.append("email", formData?.email);
        payLoad.append("message", formData?.message);
        payLoad.append("access_key", ACCESS_KEY)


        const response = await fetch(W3_URL, {
            method: "POST",
            body: payLoad
        });

        const data = await response.json();

        if (data.success) {
            handleAlert("Your message has be sent", "success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            })
        } else {
            handleAlert("Something went wrong! Try Again in a few minutes", "error")
            console.log("Error", data);
        }


    }

    return (
        <div className={styles.contatForm_container}>
            <AlertBanner message={showAlert.message} type={showAlert.type} show={showAlert.show} />

            <div className={styles.name}>
                <input onChange={(e) => { handleFormInput("firstName", e.target.value) }} value={formData?.firstName} type='text' placeholder='First Name' />
                <input onChange={(e) => { handleFormInput("lastName", e.target.value) }} value={formData?.lastName} type='text' placeholder='Last Name' />
            </div>

            <div className={styles.email}>
                <input onChange={(e) => { handleFormInput("email", e.target.value) }} value={formData?.email} type='email' placeholder='E-mail' />
            </div>

            <textarea onChange={(e) => { handleFormInput("message", e.target.value) }} value={formData?.message} className={styles.message} placeholder='Type your message here...'>

            </textarea>
            <div className={styles.talkButton}>
                <JButton
                    buttonText={"Let's Talk"}
                    classStyle={{ fontSize: "0.8rem", }}
                    functionCall={submitForm}
                />

            </div>

        </div>
    )
}

export default ContactForm