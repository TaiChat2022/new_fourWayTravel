import { useDocQuery } from '@/hooks/useFirestore';
import DatphongLayout from '@/layout/datphong';
import Footer from '@/pages/Footer';
import { auth } from '@/utils/firebase.config';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

// import SearchBar from './SearchBar';
const Datphong = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);
	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			}
			else {
				setUser(null);
			}
		});
	}, []);

	const db = getFirestore();

	const [formData, setFormData] = React.useState({
		title: '',
		firstName: '',
		lastName: '',
		email: '',
		confirmEmail: '',
		phone: '',
		region: '',
		additionalRequest: '',
	});

	const [formErrors, setFormErrors] = React.useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateForm = () => {
		let errors = {};
		if (!formData.firstName.trim()) errors.firstName = 'Tên không được để trống';
		if (!formData.lastName.trim()) errors.lastName = 'Họ không được để trống';
		if (!formData.email) {
			errors.email = 'Email không được để trống';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email không hợp lệ';
		}
		if (formData.email !== formData.confirmEmail) errors.confirmEmail = 'Email không khớp';
		if (!formData.phone.trim()) errors.phone = 'Số điện thoại không được để trống';

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			alert('Vui lòng sửa các lỗi trước khi đặt phòng.');
			return;
		}

		// Generate a unique ID for the booking, here we're using a timestamp
		const bookingId = `booking_${Date.now()}`;

		try {
			// Reference the user's document in the 'users' collection
			const userDocRef = doc(db, 'users', user.uid);

			// Get the current user's document
			const userDoc = await getDoc(userDocRef);

			// If the document exists, retrieve the current datphong array and append the new booking
			let newDatphongArray = [];
			if (userDoc.exists()) {
				const userData = userDoc.data();
				newDatphongArray = userData.datphong ? [...userData.datphong] : [];
			}

			// Append the new booking with a unique ID to the datphong array
			newDatphongArray.push({
				id: bookingId,
				luuTruId: id,
				bookingDetails: formData,
			});

			// Update the document with the new datphong array
			await setDoc(userDocRef, { datphong: newDatphongArray }, { merge: true });

			alert('Thông tin đặt phòng đã được lưu thành công!');
			// Clear the form
			setFormData({
				title: '',
				firstName: '',
				lastName: '',
				email: '',
				confirmEmail: '',
				phone: '',
				region: '',
				additionalRequest: '',
			});
		} catch (error) {
			console.error('Error updating document: ', error);
			alert('Lỗi khi lưu thông tin đặt phòng.');
		}
	};
	return (
		<>
			<Header />
			{/* <SearchBar /> */}
			<DatphongLayout
				data={data}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				formErrors={formErrors}
			/>
			<Footer />
		</>
	);
};

export default Datphong;
