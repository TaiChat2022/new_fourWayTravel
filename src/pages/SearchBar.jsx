import { useDocsQuery } from '@/hooks/useFirestore';
import SearchBarLayout from '@/layout/SearchBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

import { Link } from 'react-router-dom';

const SearchBar = () => {
    const { data: diadanh } = useDocsQuery('danhmuc');

    return (
        <>
            <SearchBarLayout
                Link={Link}
                Box={Box}
                InputLabel={InputLabel}
                FormControl={FormControl}
                NativeSelect={NativeSelect}
                diadanh={diadanh}
            />
        </>
    );
};

export default SearchBar;