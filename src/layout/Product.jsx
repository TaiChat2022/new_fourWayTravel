const ProductLayout = ({
    luuTru , renderStars
}) => {
    return (
        <>
            {luuTru ? (
                <>
                    {luuTru.map((item) =>
                        <>
                            <div className="mx-auto mb-7 w-3/4 mt-10">
                                <img src={item.img} alt="" />
                                <div>{item.title}</div>
                                <div>{item.diachi}</div>
                                <div>{renderStars(item.star)}</div>
                                <div>{item.price}</div>
                            </div>

                        </>
                    )}
                </>
            ) : (
                <></>
            )
            }
        </>
    );
};

export default ProductLayout;