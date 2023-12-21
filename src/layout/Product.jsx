import banner1 from '../assets/img/HOTELVIETANH.jpg';
const ProductLayout = ({
    luuTru, renderStars, Link,
    hotLuuTru, khachSanVip,
    handleAddToRecentlyViewed,
    topDiscountedLuuTru,
}) => {
    return (
        <>
            <div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
                <h1 className='py-2 text-lg font-semibold leading-tight font-poppins tracking-wide'><i className="fa-solid fa-fire"></i> Top Homestay hot </h1>
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
                <h1 className='py-2 text-lg font-semibold leading-tight font-poppins tracking-wide'><i className="fa-regular fa-crown"></i> Homestay sang trọng</h1>
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
            <img src={banner1} alt="Banner FourWay Travel"
                className='w-3/4 mt-2 object-contain mx-auto'
            />
            <div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
                <h1 className='py-2 text-lg font-semibold leading-tight font-poppins tracking-wide'><i class="fa-regular fa-house-fire"></i> Siêu giảm giá</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4 gap-4'>
                    {luuTru ?
                        (
                            <>
                                {topDiscountedLuuTru.map((item, index) =>
                                    <>
                                        <Link to={`/booking/chitiet/${item.id}`}
                                            onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img, item.price, item.lastViewed)}
                                        >
                                            <div key={index} className='col-span-2 md:col-span-1 relative h-60'>
                                                <img src={item.img} alt={item.title} className='rounded-md w-full h-full object-cover' />
                                                <div className='content absolute bottom-0 text-white  backdrop-blur-sm w-full bg-black/30 p-2'>
                                                    <h2 className=''>{item.title}</h2>
                                                    <div>{renderStars(item.star)}</div>
                                                    <div>{(item.price).toLocaleString('vi')} VND</div>
                                                </div>

                                                <div className="absolute top-0 right-0 bg-red-500 text-white rounded-lg p-2">
                                                    {item.voucher} %
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
        </>
    );
};

export default ProductLayout;