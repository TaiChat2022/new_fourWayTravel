import { useDocsQuery } from '@/hooks/useFirestore';
import SearchBarLayout from '@/layout/SearchBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const navigate = useNavigate();

	const { data: diadanh } = useDocsQuery('danhmuc');
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');
	const [startDateSelected, setStartDateSelected] = React.useState(false);
	const [address, setAddress] = useState(undefined);

	const handleStartDateChange = (event) => {
		setStartDate(event.target.value);
		setStartDateSelected(true);
	};

	const handleEndDateChange = (event) => {
		const selectedEndDate = event.target.value;

		if (!startDateSelected) {
			// Nếu ngày nhận phòng chưa được chọn, không cho chọn ngày trả phòng.
			alert('Vui lòng chọn ngày nhận phòng trước.');
		} else {
			// Kiểm tra nếu ngày trả phòng trước ngày nhận phòng
			if (selectedEndDate < startDate) {
				alert('Ngày trả phòng không thể trước ngày nhận phòng.');
				// Bạn có thể thay thế alert bằng cách hiển thị một thông báo khác hoặc thực hiện một hành động khác tùy theo yêu cầu của ứng dụng của bạn.
			} else {
				setEndDate(selectedEndDate);
			}
		}
	};

	const handleSearch = () => {
		if (!address) {
			alert('Vui lòng chọn địa chỉ trước khi tìm kiếm.');
			return;
		}

		navigate(`/booking?address=${address}&startDate=${startDate}&endDate=${endDate}`);

		// Thực hiện xử lý tìm kiếm với startDate và endDate ở đây
	};

	return (
		<>
			<SearchBarLayout
				Link={Link}
				Box={Box}
				InputLabel={InputLabel}
				FormControl={FormControl}
				NativeSelect={NativeSelect}
				diadanh={diadanh}
				startDate={startDate}
				endDate={endDate}
				handleStartDateChange={handleStartDateChange}
				handleEndDateChange={handleEndDateChange}
				startDateSelected={startDateSelected}
				handleSearch={handleSearch}
				onAddressChange={(e) => setAddress(e?.target?.value)}
			/>
		</>
	);
};

export default SearchBar;
