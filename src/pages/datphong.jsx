import { useDocQuery } from '@/hooks/useFirestore';
import DatphongLayout from '@/layout/datphong';
import Footer from '@/pages/Footer';
import { auth, firestore } from '@/utils/firebase.config';
import axios from 'axios';
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Datphong = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);
	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
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
		const selectedValue = e.target.value; // Get the selected value
		updateFirebaseWithSelectedValue(selectedValue); // Call the function to update Firebase
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

	// cập nhật 2 hàm này để sài được thống kê 
	const handleBookingSuccess = async (luuTruId) => {
		try {
			// Get the luuTru document
			const luuTruDocRef = doc(db, 'luuTru', luuTruId);
			const luuTruDoc = await getDoc(luuTruDocRef);

			if (luuTruDoc.exists()) {
				// If the luuTru document exists, get the 'price' field
				const price = luuTruDoc.data().price || 0;

				// Update the 'bookingCount' and 'totalRevenue' fields
				const currentCount = luuTruDoc.data().bookingCount || 0;
				const currentRevenue = luuTruDoc.data().totalRevenue || 0;

				// Calculate the new total revenue based on the retrieved price
				const newRevenue = currentRevenue + parseFloat(price);

				await updateDoc(luuTruDocRef, {
					bookingCount: currentCount + 1,
					totalRevenue: newRevenue
				});

				console.log('Booking count and total revenue incremented successfully.');
			} else {
				console.error('LuuTru document does not exist.');
			}
		} catch (error) {
			console.error('Error updating booking count and total revenue:', error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			alert('Vui lòng sửa các lỗi trước khi đặt phòng.');
			return;
		}

		// Generate a unique ID for the booking, here we're using a timestamp
		const bookingId = `${Date.now()}`;

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
				uid: bookingId,
				luuTruId: id,
				bookingDetails: formData,
			});

			// Update the document with the new datphong array
			await setDoc(userDocRef, { datphong: newDatphongArray }, { merge: true });
			//cập nhật cái này để sài được thống kê
			handleBookingSuccess(id);


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

			const { firstName, lastName } = formData;
			const { danhmuc, diaChi, img, title, price } = data;
			// Chuẩn bị dữ liệu email
			const emailData = {
				to: formData.email,
				subject: `Thông tin đặt phòng FourWayTravel`,
				html: `
				<!doctype html>
				<html lang="en">
					<head>
						<meta charset="UTF-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<title>Mail from FourWayTravel</title>
						<link rel="stylesheet" />
					</head>
					<body>
						<div class="container">
							<div
								class="header"
								style="width: 100%; display: flex; justify-content: start; border-bottom: 1px solid #999"
							>
								<div
									class="logo"
									style="
										width: 75%;
										display: flex;
										justify-content: start;
										align-items: center;
										margin: 1.5rem 0 1.5rem 0;
										background-color: #fff;
									"
								>
									<img
									src="https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/404055892_3701745123483688_926822836482026852_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z8SmlJz9RbkAX_wpbOf&_nc_ht=scontent.fsgn21-1.fna&oh=00_AfCCsNHg9l-29iqf85VfwUHwgzN_1SHJvifGtMtmyYMQww&oe=6567A567"
										style="width: 250px; height: 100px; object-fit: contain"
									/>
								</div>
							</div>
							<div class="title">
								<h3>Kính gửi: Quý khách hàng ${firstName} ${lastName}</h3>
								<h3>Cám ơn Quý khách đã sử dụng dịch vụ của hệ thống Cổng thanh toán - Ví điện tử MOMO.</h3>
								<h3>
									Quý khách vừa thực hiện thanh toán thành công cho booking phòng
									<b class="inDam">FourWayTravel</b>
								</h3>
				
								<h3 class="ttdh">Thông tin đơn hàng:</h3>
								<table style="border-collapse: collapse; width: 100%">
									<tr>
										<td
											colspan="2"
											style="padding: 10px 10px 10px 0"
										>
											<img
												src="${img}"
												style="width: 250px; height: 250px; object-fit: contain"
											/>
										</td>
									</tr>
									<tr>
										<td style="padding: 10px 10px 10px 0">Mã giao dịch</td>
										<td style="padding: 10px 10px 10px 0">${bookingId}</td>
									</tr>
				
									<tr>
										<td style="padding: 10px 10px 10px 0">Khu vực</td>
										<td style="padding: 10px 10px 10px 0">${danhmuc}</td>
									</tr>
									<tr>
										<td style="padding: 10px 10px 10px 0">Địa chỉ</td>
										<td style="padding: 10px 10px 10px 0">${diaChi}</td>
									</tr>
									<tr>
										<td style="padding: 10px 10px 10px 0">Tên khách sạn</td>
										<td style="padding: 10px 10px 10px 0">${title}</td>
									</tr>
									<tr>
										<td style="padding: 10px 10px 10px 0">Thời gian giao dịch</td>
										<td style="padding: 10px 10px 10px 0">17/11/2023</td>
									</tr>
				
									<tr>
										<td style="padding: 10px 10px 10px 0">Phí giao dịch</td>
										<td style="padding: 10px 10px 10px 0">${price.toLocaleString('vi')} VND</td>
									</tr>
								</table>
							</div>
							<div
								class="footer"
								style="
									display: flex;
									justify-content: space-around;
									align-items: start;
									margin-top: 1rem;
									width: 100%;
									border-top: 1px solid #999;
									background-color: #fff;
									color: #333;
									flex-wrap: wrap;
								"
							>
								<img
									src="https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/404055892_3701745123483688_926822836482026852_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z8SmlJz9RbkAX_wpbOf&_nc_ht=scontent.fsgn21-1.fna&oh=00_AfCCsNHg9l-29iqf85VfwUHwgzN_1SHJvifGtMtmyYMQww&oe=6567A567"
									style="width: 250px; height: 100px; object-fit: contain; margin-top: 1.5rem"
								/>
								<div
									class="title-footer"
									style="margin-top: 0.5rem"
								>
									<p>Mọi chi tiết xin liên hệ: Trung tâm thanh toán điện tử - MOMO</p>
									<p>Địa chỉ: QTSC 9 Builingg, Tô Ký, Tân Chánh Hiệp ,Q.12 , Tòa T</p>
									<p>
										Email:
										<a href="#">support.fourwaytravel@gmail.com</a>
									</p>
									<p>Số điện thoại: 1900 1530 hoặc 08.9999.1530</p>
									<p>
										Website:
										<a href="#">https://fourwaytravel.com</a>
									</p>
								</div>
							</div>
						</div>
					</body>
				</html>
			
				`,
			};

			// Gửi yêu cầu POST đến server
			try {
				const response = await axios.post('http://localhost:3000/sendmail', emailData);
				console.log(response.data); // Xử lý phản hồi từ server
			} catch (error) {
				console.error('Error sending email:', error);
			}

		} catch (error) {
			console.error('Error updating document: ', error);
			alert('Lỗi khi lưu thông tin đặt phòng.');
		}
	};

	const updateFirebaseWithSelectedValue = (selectedValue) => {
		// Define the collection and document where you want to update the value
		const collectionRef = firestore.collection('thanhtoan'); // Change to your collection name
		const documentRef = collectionRef.doc('YOUR_DOCUMENT_ID'); // Replace with the document ID you want to update

		// Update the 'tieuDe' field with the selected value
		documentRef
			.update({
				tieuDe: selectedValue,
			})
			.then(() => {
				console.log(`Document updated with value: ${selectedValue}`);
			})
			.catch((error) => {
				console.error('Error updating document:', error);
			});
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
				updateFirebaseWithSelectedValue={updateFirebaseWithSelectedValue}

			/>
			<Footer />
		</>
	);
};

export default Datphong;