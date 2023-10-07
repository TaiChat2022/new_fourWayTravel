import React from 'react';

const List_luuTruUI = ({
    selectedItem
}) => {
    if (!selectedItem) {
        return <div>Loading or item not found...</div>;
    }
    return (
        <>
             <h2>{selectedItem.title}</h2>
            <img src={selectedItem.img} alt={selectedItem.title} />
            <p>{selectedItem.diaChi}</p>
        </>
    );
};

export default List_luuTruUI;