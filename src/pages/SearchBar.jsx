import { useDocsQuery } from '@/hooks/useFirestore';
import Filter from '@/layout/Filter';
import SearchBarLayout from '@/layout/SearchBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};
function getStyles(name, isBookingPage, theme) {
	return {
		fontWeight:
			isBookingPage.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const SearchBar = () => {
	// const navigate = useNavigate();

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

	const location = useLocation();
	const isBookingPage = location.pathname === '/booking';

	const searchParams = new URLSearchParams(location.search);

	const SearchAddress = searchParams.get('address');

	const [filterAddress, setFilterAddress] = useState(address);

	const theme = useTheme();
	return (
		<>
			<SearchBarLayout
				Link={Link}
				Box={Box}
				InputLabel={InputLabel}
				FormControl={FormControl}
				// selection
				NativeSelect={NativeSelect}
				Select={Select}
				MenuItem={MenuItem}
				OutlinedInput={OutlinedInput}
				MenuProps={MenuProps}
				getStyles={getStyles}
				theme={theme}

				diadanh={diadanh}
				startDate={startDate}
				endDate={endDate}
				handleStartDateChange={handleStartDateChange}
				handleEndDateChange={handleEndDateChange}
				startDateSelected={startDateSelected}
				// handleSearch={handleSearch}
				onAddressChange={(e) => setAddress(e?.target?.value)}
				useLocation={useLocation}

				Filter={Filter}
				location={location}
				isBookingPage={isBookingPage}
				SearchAddress={SearchAddress}
				filterAddress={filterAddress}
				setFilterAddress={setFilterAddress}

				address={address}
			/>
		</>
	);
};

export default SearchBar;
