const ProductLayout = ({
    luuTru, renderStars, Link,
    hotLuuTru, khachSanVip
}) => {
    return (
        <>
            <div className="mx-auto mb-7 w-3/4 mt-0 px-0 py-0 ">
                <img src="" alt="" />
                <h1 className='py-5 search-title pt-2 flex items-center'><img src="https://cdn-icons-png.flaticon.com/128/1633/1633308.png" className=" w-6 mr-2" alt="" />Top khách sạn hot </h1>
                <div className="overflow-y-hidden overflow-x-auto">
                    <div className='flex w-screen mb-4 gap-4'>
                        {luuTru ?
                            (
                                <>
                                    {hotLuuTru.map((item) =>
                                        <>
                                            <Link to={`/booking/${item.id}`}>
                                                <div className='col-span-1 relative'>
                                                    <img src={item.img} alt="" className='w-60 h-60 rounded-md' />
                                                    <div className='content absolute bottom-0 px-5 py-2 left-0 text-white backdrop-blur-sm w-full bg-black/30'>
                                                        <h2 className=''>{item.title}</h2>
                                                        <div>{renderStars(item.star)}</div>
                                                        <div>{(item.price).toLocaleString('vi')} Vnd</div>
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
            <div className="mx-auto mb-7 w-3/4 mt-10 px-0 py-0 ">
                <h1 className='py-5 search-title pt-2 flex items-center'><img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" className=" w-6 mr-2" alt="" /> Top khách sạn sang trọng</h1>
                <div className="overflow-y-hidden overflow-x-auto">
                    <div className='flex w-screen mb-4 gap-4'>
                        {luuTru ?
                            (
                                <>
                                    {khachSanVip.map((item) =>
                                        <>
                                            <Link to={`/booking/${item.id}`}>
                                                <div className='col-span-1 relative w-60 h-60'>
                                                    <img src={item.img} alt="" className='rounded-md' />
                                                    <div className='content absolute bottom-0 px-5 py-2 left-0 text-white backdrop-blur-sm w-full bg-black/30'>
                                                        <h2 className=''>{item.title}</h2>
                                                        <div>{renderStars(item.star)}</div>
                                                        <div>{(item.price).toLocaleString('vi')} Vnd</div>
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