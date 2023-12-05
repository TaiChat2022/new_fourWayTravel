const ListKhuVucLayout = ({
    luuTru, Link, mienBacLuuTru,
    mienNamLuuTru, mienTrungLuuTru,
    handleToggleMienNam,
    displayedMienNam, isExpanded,
    handleToggleMienTrung, isExpandedTrung,
    displayedMienTrung, isExpandedBac,
    displayedMienBac, handleToggleMienBac
}) => {
    return (
        <>
            <div className="mx-auto w-3/4 mt-5 pr-2 mb-2">
                <div>
                    <h2
                        className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                        id="more-popular-searches"
                    >
                        Tìm kiếm phổ biến ở Hồ Chí Minh
                    </h2>

                </div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedMienNam.map((item) =>
                                <Link to={`/booking/chitiet/${item.id}`} >
                                    <>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </>
                                </Link>
                            )}

                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }

                </div>
                <div className="mt-1">
                    {mienNamLuuTru.length >= 3 && (
                        <button
                            onClick={handleToggleMienNam}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>
            <div className="mx-auto w-3/4 pr-2 mb-2">
                <div><h2
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm ở phổ Hà Nội
                </h2></div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedMienBac.map((item) =>
                                <>
                                    <Link>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }
                </div>
                <div className="mt-1">
                    {mienBacLuuTru.length >= 3 && (
                        <button
                            onClick={handleToggleMienBac}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpandedBac ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>
            <div className="mx-auto w-3/4 pr-2 mb-2">

                <h3
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm phổ biến ở Đà Nẵng
                </h3>

                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedMienTrung.map((item) =>
                                <>
                                    <Link>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }
                </div>
                <div className="mt-1">
                    {mienTrungLuuTru.length >= 3 && (
                        <button
                            onClick={handleToggleMienTrung}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpandedTrung ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListKhuVucLayout;