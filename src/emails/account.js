const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name)=>{
    sgMail.send({
        to: email,
        from: 'prahladkumar1316@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the App`
    })
}

const sendDeletionMail = async (email, name)=>{
    sgMail.send({
        to: email,
        from: 'prahladkumar1316@gmail.com',
        subject: 'Sorry to see yo go!!!',
        text: `Hello ${name}, I am highly thankful to you about that you had used our Application. Please give a review about my App`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionMail
}