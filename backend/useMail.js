const express = require('express');
import nodemailer from 'nodemailer';
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'dangminhtai15052002@gmail.com',
		pass: 'uizm psxs mtsc zquc',
	},
});

app.post('/send-email', async (req, res) => {
	const { recipient, subject, message } = req.body;

	try {
		await transporter.sendMail({
			from: 'dangminhtai15052002@gmail.com',
			to: recipient,
			subject: subject,
			text: message,
		});
		res.status(200).send('Email sent successfully');
	} catch (error) {
		console.error(error);
		res.status(500).send('Error in sending email');
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
