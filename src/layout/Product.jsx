const ProductLayout = ({
    luuTru, renderStars, Link,
    hotLuuTru, khachSanVip,
    handleAddToRecentlyViewed
}) => {
    return (
        <>
            <div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
                <h1 className='py-2 text-lg font-medium leading-tight font-poppins'><i className="fa-solid fa-fire"></i> Top khách sạn hot </h1>
                <div className="overflow-y-hidden overflow-x-auto">
                    <div className='flex w-screen mb-4 gap-4'>
                        {luuTru ?
                            (
                                <>
                                    {hotLuuTru.map((item, index) =>
                                        <>
                                            <Link to={`/booking/chitiet/${item.id}`}
                                                onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img, item.price, item.lastViewed)}
                                            >
                                                <div key={index} className='relative w-60 h-60'>
                                                    <img src={item.img} alt={item.title} className=' rounded-md w-full h-full' />
                                                    <div className='content absolute bottom-0 text-white backdrop-blur-sm w-full bg-black/30 p-2'>
                                                        <h2>{item.title}</h2>
                                                        <div>{renderStars(item.star)}</div>
                                                        <div>{(item.price).toLocaleString('vi')} VND</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
                <h1 className='py-2 text-lg font-medium leading-tight font-poppins'><i className="fa-regular fa-crown"></i> Top khách sạn sang trọng </h1>
                <div className="overflow-y-hidden overflow-x-auto">
                    <div className='flex w-screen mb-4 gap-4'>
                        {luuTru ?
                            (
                                <>
                                    {khachSanVip.map((item, index) =>
                                        <>
                                            <Link to={`/booking/chitiet/${item.id}`}
                                                onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img, item.price, item.lastViewed)}
                                            >
                                                <div key={index} className='relative w-60 h-60'>
                                                    <img src={item.img} alt={item.title} className='rounded-md w-full h-full' />
                                                    <div className='content absolute bottom-0 text-white  backdrop-blur-sm w-full bg-black/30 p-2'>
                                                        <h2 className=''>{item.title}</h2>
                                                        <div>{renderStars(item.star)}</div>
                                                        <div>{(item.price).toLocaleString('vi')} VND</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLayout;