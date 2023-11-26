import { useMutation } from 'react-query';

const useSendEmail = () => {
	return useMutation((formData) => {
		return fetch('http://localhost:3000/sendmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
	});
};

export default useSendEmail;
