import { useDocQuery } from '@/hooks/useFirestore';
import DatphongLayout from '@/layout/datphong';
import { auth, firestore } from '@/utils/firebase.config';
import axios from 'axios';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';

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
		phone: '',
		additionalRequest: '',
		checkinTime: '',
		checkoutTime: '',
		cccd: ''
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

		if (!formData.phone.trim()) {
			errors.phone = 'Số điện thoại không được để trống';
		} else if (formData.phone.trim().length !== 10 || !/^\d{10}$/.test(formData.phone.trim())) {
			errors.phone = 'Số điện thoại phải có đúng 10 số';
		}

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); // Reset time to 00:00:00 for comparison
		// Validate CCCD
		if (!formData.cccd.trim()) {
			errors.cccd = 'CCCD không được để trống';
		} else if (formData.cccd.trim().length !== 12 || !/^\d{12}$/.test(formData.cccd.trim())) {
			errors.cccd = 'CCCD phải có đúng 12 số';
		}

		// Validate checkinTime
		if (!formData.checkinTime) {
			errors.checkinTime = 'Vui lòng chọn ngày nhận phòng';
		} else if (new Date(formData.checkinTime) < currentDate) {
			errors.checkinTime = 'Ngày nhận phòng không thể trước ngày hiện tại';
		}

		// Validate checkoutTime
		if (!formData.checkoutTime) {
			errors.checkoutTime = 'Vui lòng chọn ngày trả phòng';
		} else if (new Date(formData.checkoutTime) < new Date(formData.checkinTime)) {
			errors.checkoutTime = 'Ngày trả phòng không thể trước ngày nhận phòng';
		} else if (new Date(formData.checkoutTime).getMonth() > currentDate.getMonth()) {
			errors.checkoutTime = 'Không chọn ngày trả phòng qua tháng hiện tại';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};
	//Hàm này để lấy thông tin user đã đặt phòng
	const getAllUsersBookings = async () => {
		const usersCollectionRef = collection(db, 'users');
		const usersSnapshot = await getDocs(usersCollectionRef);

		const allUsersBookings = [];

		usersSnapshot.forEach((userDoc) => {
			const userData = userDoc.data();
			const userBookings = userData.datphong || [];
			allUsersBookings.push(...userBookings);
		});

		return allUsersBookings;
	};
	// cập nhật 2 hàm này để sài được thống kê 
	const handleBookingSuccess = async (luuTruId) => {
		try {
			const luuTruDocRef = doc(db, 'luuTru', luuTruId);
			const luuTruDoc = await getDoc(luuTruDocRef);

			if (luuTruDoc.exists()) {
				const price = luuTruDoc.data().price || 0;
				const currentCount = luuTruDoc.data().bookingCount || 0;
				const currentRevenue = luuTruDoc.data().totalRevenue || 0;
				const newRevenue = currentRevenue + parseFloat(price);

				await updateDoc(luuTruDocRef, {
					bookingCount: currentCount + 1,
					totalRevenue: newRevenue,
				});

				// console.log('Booking count and total revenue incremented successfully.');
			} else {
				// console.error('LuuTru document does not exist.');
			}
		} catch (error) {
			// console.error('Error updating booking count and total revenue:', error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			alert('Vui lòng sửa các lỗi trước khi đặt phòng.');
			return;
		}

		// Cài đặt thời gian nhận phòng là 2h chiều còn thời gian trả phòng là 12h trưa hôm trả phòng sau
		const { name, value } = e.target;
		let updatedFormData = { ...formData };
		if (name === 'checkinTime') {
			// Set check-in time to 2 PM (14:00) on the selected date
			const checkinDate = new Date(value);
			checkinDate.setHours(14, 0, 0); // Set to 14:00:00
			updatedFormData.checkinTime = checkinDate.toISOString().split("T")[0];

			// Automatically set checkout time to 12 PM (12:00) the next day
			const checkoutDate = new Date(checkinDate);
			checkoutDate.setDate(checkoutDate.getDate() + 1); // Add one day
			checkoutDate.setHours(12, 0, 0); // Set to 12:00:00
			updatedFormData.checkoutTime = checkoutDate.toISOString().split("T")[0];

		} else if (name === 'checkoutTime') {
			// Set checkout time to 12 PM (12:00) on the selected date
			const checkoutDate = new Date(value);
			checkoutDate.setHours(12, 0, 0); // Set to 12:00:00
			updatedFormData.checkoutTime = checkoutDate.toISOString().split("T")[0];
		} else {
			updatedFormData[name] = value;
		}
		setFormData(updatedFormData);

		try {
			// Lấy thông tin đặt phòng của tất cả người dùng
			const allUsersBookings = await getAllUsersBookings();

			// Kiểm tra xung đột với thông tin đặt phòng của tất cả người dùng
			const hasConflict = allUsersBookings.some((booking) => {
				const bookingCheckinTime = new Date(booking.bookingDetails.checkinTime);
				const bookingCheckoutTime = new Date(booking.bookingDetails.checkoutTime);
				const newCheckinTime = new Date(formData.checkinTime);
				const newCheckoutTime = new Date(formData.checkoutTime);

				// Format dates to only include day, month, and year
				const formatToDateOnly = (dateString) => {
					const date = new Date(dateString);
					const day = ('0' + date.getDate()).slice(-2);
					const month = ('0' + (date.getMonth() + 1)).slice(-2);
					const year = date.getFullYear();
					return `${day}/${month}/${year}`;
				};

				const formattedBookingCheckin = formatToDateOnly(bookingCheckinTime);
				const formattedBookingCheckout = formatToDateOnly(bookingCheckoutTime);
				const formattedNewCheckin = formatToDateOnly(newCheckinTime);
				const formattedNewCheckout = formatToDateOnly(newCheckoutTime);

				return (
					(formattedNewCheckin >= formattedBookingCheckin && formattedNewCheckin < formattedBookingCheckout) ||
					(formattedNewCheckout > formattedBookingCheckin && formattedNewCheckout <= formattedBookingCheckout) ||
					(formattedNewCheckin <= formattedBookingCheckin && formattedNewCheckout >= formattedBookingCheckout)
				);
			});

			if (hasConflict) {
				alert('Phòng đã được đặt trong khoảng thời gian này. Vui lòng chọn thời gian khác.');
				return;
			}

			const submissionTime = new Date();
			const formattedSubmissionTime = submissionTime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

			// Tiếp tục với quá trình lưu thông tin đặt phòng nếu không có xung đột
			const bookingId = `${Date.now()}`;

			// Reference the user's document in the 'users' collection
			const userDocRef = doc(db, 'users', user.uid);

			// Get the current user's document
			const userDoc = await getDoc(userDocRef);

			// If the document exists, retrieve the current datphong formarray and append the new booking
			let newDatphongArray = [];
			if (userDoc.exists()) {
				const userData = userDoc.data();
				newDatphongArray = userData.datphong ? [...userData.datphong] : [];
			}
			// Format checkinTime and checkoutTime
			const formattedCheckinTime = new Date(formData.checkinTime).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit' }).split(', ')[0];
			const formattedCheckoutTime = new Date(formData.checkoutTime).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit' }).split(', ')[0];
			// Append the new booking with a unique ID to the datphong array
			newDatphongArray.push({
				uid: bookingId,
				luuTruId: id,
				ngayThanhToan: formattedSubmissionTime,
				tongTien: data.price * numberOfDaysStayed,
				giaGoc: data.price,
				bookingDetails: {
					...formData, checkinTime: formattedCheckinTime
					, checkoutTime: formattedCheckoutTime
				},
			});

			// Update the document with the new datphong array
			await setDoc(userDocRef, { datphong: newDatphongArray }, { merge: true });
			// Cập nhật cái này để sử dụng được thống kê
			handleBookingSuccess(id);

			alert('Thông tin đặt phòng đã được lưu thành công!');
			// Clear the form
			setFormData({
				tieuDe: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				additionalRequest: '',
				checkinTime: '',
				checkoutTime: '',
				cccd: '',
			});

			const { tieuDe, firstName, lastName, additionalRequest, cccd } = formData;
			const { danhmuc, diaChi, img, title, price } = data;
			// Chuẩn bị dữ liệu email
			const emailData = {
				to: formData.email,
				subject: `Thông tin booking FourWayTravel`,
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
						<div style="width: 100%; background-color: #e6e6e6;">
							<div class="container" style="width: 60%; margin: 0 auto; background-color: white;">
								<div
								class="header"
								style="width: 100%; display: flex; justify-content: center;"
								>
								<div
								class="logo"
								style="
											width: 75%;
											height: 50px;
											position: relative;
											align-items: center;
											margin: 0 auto;
											"
									>
									
									<img
									src="https://lh3.googleusercontent.com/pw/ABLVV85jVRB0wDfOHqewIRKOwDuz413j7soSXpW7UmJ5FXhyNhtZpfpOEAzhOWAvYdcRO6w7iWVp7w3fDJ887SCqM8-l5qeOk61cpRkHeF0_IFHVhZD5Oqeu92_IU6pkYhler1dKQvBH6seRry8VUd1CVe-bOroqZY1i-e5xZ-05FDoUkkk3rFG9ts_2HVKR5MbspV_yqVWvffQyaqg8fZdJQv-j1K19vZKmMXVQryGXiMnWEzYyeQ59eRcI27DuB7PCq1uSUBwr6v_wO2TIt_CT4MQI01hsLfdFFAQ02dFpAsRK_fCxOIrmve6w2D0S0JQcyOzqdVEs2qFexEoeYQEy-bVQVAvWp70PRW8aaGnmH881sw64G4mkaT7D4TVPwQVxBSblhf1bk_fRHqPmGxnEmLu-7uw6B-R--PrfHaS0hsfo5yHwyaq_pJP7LsjXofxT2CjWltF59MW4NrztuQCB3iUl7tpdzF-X7b-Z96Kyf50yOVbmA6jHBJmKl1P41NlLqosw1_P4m98s6ZjtOT7b0fCpOJYasP6zs-rkEVVeKT2-4yfPqE030r6QyKWrvYXNVc9XvtlrLKD_0X8XHX1LrSaKivQpKaFTZaiixLETPadYdpezcsw8URXB3SIxnwV8d_wsVzmR8YWDXwoPit8Yi4VGN8OfYwbx4QS-UMY9GSheWeFUAyTLSvr8X68KovDiIQ1H9zrDMhXvAkw7XDba4vqJ9sNkexQrv0D5tkeGWTgR9EOqRBhlmDdQTTt3E_idkzgtgf6NBxFXJbAgZir7qmX6bz3QIAFm_QnNH-5pDPhUgZuKVy-_cfXaFwNjUPzHT16zxEaOhUeUlsMs_BTFHHJbH1jra_fmxgcorOW64bwuBc84BTu6z4VTCgxZHOblphsgNw=w1024-h132-s-no-gm?authuser=0"
									style="width: 200px; height: 50px; object-fit: contain; position: absolute;
									inset: auto 0 auto 0; margin: auto;"
									/>
								</div>	
							</div>
							<img src="https://adminfourwaytravel.web.app/static/media/HOTEL.fcfa1d001ee4011c781c.jpg" style="width: 100%;" alt="">
								<div class="title" style="margin-left: 2rem; margin-right: 2rem;">
									<h3>Kính gửi: Quý ${tieuDe ? (tieuDe) : (`khách hàng`)} ${lastName} ${firstName}</h3>
									<h3>Cám ơn Quý khách đã sử dụng dịch vụ của hệ thống Cổng thanh toán - Ví điện tử MOMO.</h3>
									<h3>
										Quý khách vừa thực hiện thanh toán thành công cho booking
										<b class="inDam">FourWayTravel</b>
									</h3>
					
									<h3 class="ttdh">Thông tin đơn hàng:</h3>
									<table style="border-collapse: collapse; width: 100%; ">
										<tr>
											<td
												colspan="2"
												style="padding: 10px 10px 10px 0; "
											>
												<img
													src="${img}"
													style="width: 250px; 
													height: 250px; 
													object-fit: contain; 
													display: block;
													margin: 0 auto;"
												/>
											</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Mã giao dịch</td>
											<td style="padding: 10px 10px 10px 0">${bookingId}</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Thời gian thanh toán</td>
											<td style="padding: 10px 10px 10px 0">${formattedSubmissionTime}</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Số CCCD của khách</td>
											<td style="padding: 10px 10px 10px 0">${cccd}</td>
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
											<td style="padding: 10px 10px 10px 0">Thời gian nhận</td>
											<td style="padding: 10px 10px 10px 0">14:00:00 ${formattedCheckinTime}</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Thời gian trả</td>
											<td style="padding: 10px 10px 10px 0">12:00:00 ${formattedCheckoutTime}</td>
										</tr>
					
										<tr>
											<td style="padding: 10px 10px 10px 0">Tổng số ngày khách ở</td>
											<td style="padding: 10px 10px 10px 0">${numberOfDaysStayed} ngày</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Giá thuê Homestay / 1 ngày</td>
											<td style="padding: 10px 10px 10px 0">${price.toLocaleString('vi')} VND</td>
										</tr>
										<tr>
											<td style="padding: 10px 10px 10px 0">Tổng cộng của quý khách là</td>
											<td style="padding: 10px 10px 10px 0">${(price * numberOfDaysStayed).toLocaleString('vi')} VND</td>
										</tr>
					
										${additionalRequest == '' ? (``) : (`
										<tr>
											<td style="padding: 10px 10px 10px 0">Yêu cầu thêm</td>
											<td style="padding: 10px 10px 10px 0">${additionalRequest}</td>
										</tr>
										`)}
									</table>
								</div>
								<div
									class="footer"
									style="display: flex;
									justify-content: space-around;
									align-items: start;
									margin-top: 1rem;
									width: 100%;
									border-top: 1px solid #999;
									background-color: rgb(0, 48, 120);
									color: #e6e6e6;
									flex-wrap: wrap;
								"
							>
								<img
									src="https://lh3.googleusercontent.com/pw/ABLVV86a-hYNm7My1hw1ay-MR2N9zN4s5Xrr377bdOtZpuD2qYkNswV_9csqzjNxcphr37iM8YoJ0hbrd081d8oV_rBOtdqKVtGittDR108gRCywHAWivvEYS-hE9ImJtI0nMAqpFhywCflmhiK9xYAoUiwDY2FeskEzMBoekaZfyD77BbLsxGfk29ASi4pwawRbKynNxDVrYemfVc5uUmoAgoMDg5zscrMKEPszCi2jChPnUqlR_VwDy5YqDuSPl8RAQXEwkBn4G1oDdVvMhWgAaG7uI1CbTUR1lI6TLL06i_-IdOBxhrBh0zN6aOPaUPCL3ZedxFzBfspvv4Wc2maTaxWGTKhvBIKmjkRlbFbWTKRlwyJUKq8PweWBzs-ERAxHAEy6VIVVSj-aiSAOXqTMS2gXyE3RDSVWjYwMJfkmvIMffPmSLQnwy4f10_CX2ReuO0759TWcWvMj2WagxsioI7LFRN7YI9WKhpY654AdaghFo7dmpxkNJ0LhIhA1xnqGvvOKshI6GiIiBw4dBPfvvPVv8RYB4gISEVSpK4JGFb9H2HokD_MINdjzTQRmqG-ySK4nOnydVsiSqyQ378nKqlyTVdNbT8-ZRGQgAmSknOFmhXLlBuxPMiBz3bZEjKOjADrF1QyttlhbV8KExSvdwgq4-pmONP4sP2dmt0Ur-9lIg0BP0Kpd71piWhwHTqgQ2vcd2xqPEzR9apmMTKvp0zSRg05Iz2TN68SKVmKTe2QwcLdCpNrx_pzOsLY2dKkujqGMp0XWHj89c3TVpdGX4SNgP2ufQaFzB7Pgx4PNncOdpyIs-S0okKnNRlPiDXWLeEwLUf8wpLEmA2-I7rPSyjt7D3Ze55V3ZMswUY94J_bfYTF65HIC1tWbBpdBghtM7hOV=w512-h66-s-no-gm?authuser=0"
									style="width: 200px; height: 100px; object-fit: contain; margin-top: 1.5rem; margin-right:1rem; margin-left: 10px;"
								/>
								<div
									class="title-footer"
									style="margin-top: 0.5rem;
											margin-right: 0.5rem;"
								>
									<p>Mọi chi tiết xin liên hệ: Trung tâm thanh toán điện tử - MOMO</p>
									<p>Địa chỉ: QTSC 9 Builingg, Tô Ký, Tân Chánh Hiệp ,Q.12 , Tòa T</p>
									<p>
										Email:
										<a href="#" style="color: white">support.fourwaytravel@gmail.com</a>
									</p>
									<p>Số điện thoại: 1900 1530 hoặc 08.9999.1530</p>
									<p>
										Website:
										<a href="#" style="color: white;">https://fourwaytravel.com</a>
									</p>
								</div>
							</div>
							</div>
						</div>
				</body>
				</html>
			
				`,
			};

			// Gửi yêu cầu POST đến server
			try {
				const response = await axios.post('http://14.225.198.206:2020/sendmail', emailData);
				// const response = await axios.post('http://localhost:3000/sendmail', emailData);
			} catch (error) {
				// console.error('Error sending email:', error);
			}

		} catch (error) {
			// console.error('Error updating document: ', error);
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
				// console.log(`Document updated with value: ${selectedValue}`);
			})
			.catch((error) => {
				// console.error('Error updating document:', error);
			});
	};

	const [numberOfDaysStayed, setNumberOfDaysStayed] = React.useState(1);

	// Function to calculate total price and number of days stayed
	const calculateOriginPriceAndDays = () => {
		const checkinDate = new Date(formData.checkinTime);
		const checkoutDate = new Date(formData.checkoutTime);
		const diffTime = Math.abs(checkoutDate - checkinDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		setNumberOfDaysStayed(diffDays);
		// const OriginPrice = diffDays * data.price;
		// setFormData({ ...formData, OriginPrice });
	};

	// Effect to update total price and number of days when dates change
	React.useEffect(() => {
		if (formData.checkinTime && formData.checkoutTime) {
			calculateOriginPriceAndDays();
		}
	}, [formData.checkinTime, formData.checkoutTime]);


	return (
		<>
			<DatphongLayout
				data={data}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				formErrors={formErrors}
				updateFirebaseWithSelectedValue={updateFirebaseWithSelectedValue}
				numberOfDaysStayed={numberOfDaysStayed}
			/>
		</>
	);
};

export default Datphong;