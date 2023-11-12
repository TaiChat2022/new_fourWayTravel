const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'dangminhtai15052002@gmail.com',
		pass: 'uizm psxs mtsc zquc',
	},
});

exports.sendBookingEmail = functions.https.onCall((data, context) => {
	const { email, bookingDetails } = data;

	const mailOptions = {
		from: '"Your Hotel" <your-email@gmail.com>', // sender address
		to: email, // list of receivers
		subject: 'Booking Confirmation', // Subject line
		text: 'Your booking details...', // plain text body
		html: '<b>Your booking details...</b>', // html body
	};

	return transporter
		.sendMail(mailOptions)
		.then((info) => {
			console.log('Email sent: ' + info.response);
			return { success: true };
		})
		.catch((error) => {
			console.error('There was an error while sending the email:', error);
			return { success: false };
		});
});
