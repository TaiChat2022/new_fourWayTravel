import { getFunctions, httpsCallable } from 'firebase/functions';
import { useCallback } from 'react';

export const useEmail = () => {
	const functions = getFunctions(); // Initialize Firebase Functions

	// Function to call the "sendBookingEmail" Firebase Function
	const sendEmail = useCallback(async ({ email, bookingDetails }) => {
		const sendBookingEmail = httpsCallable(functions, 'sendBookingEmail');
		return sendBookingEmail({ email, bookingDetails });
	}, []);

	return { sendEmail };
};
