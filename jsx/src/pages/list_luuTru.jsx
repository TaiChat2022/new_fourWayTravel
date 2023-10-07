import React from 'react';
import { useParams} from "react-router-dom";

import List_luuTruUI from './layout/list_luuTruUI';
const List_luuTru = ({
    luuTru_list = []
}) => {
    const { luuTruId } = useParams();
    
    const selectedItem = luuTru_list.find(item => item.id === luuTruId);

    return (
        <>
            <List_luuTruUI
                selectedItem={selectedItem}
            />
        </>
    );
};

export default List_luuTru;
