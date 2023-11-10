const ProductLayout = ({
    luuTru, renderStars
}) => {
    return (
        <>
            {luuTru ? (
                <>
                    <div className="mx-auto mb-7 w-3/4 mt-10 bg-gray-500">
                        <div className="grid grid-cols-4 gap-4">
                            {luuTru.map((item) =>
                                <>
                                    <div className="col-span-1 relative">
                                        <img className="w-50 h-50 rounded-md" src={item.img} alt={item.title} />
                                        <div className="content absolute bottom-2 left-2">
                                            <div>{item.title}</div>
                                            <div>{item.diachi}</div>
                                            <div>{renderStars(item.star)}</div>
                                            <div>{(item.price).toLocaleString('vi')} VND</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )
            }
        </>
    );
};

export default ProductLayout;