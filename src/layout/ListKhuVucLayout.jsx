
const ListKhuVucLayout = ({
    luuTru, Link, mienBacLuuTru,
    mienNamLuuTru,mienTrungLuuTru,
    handleToggleMienNam    
}) => {
    return (
        <>
            <div className="mx-auto mb-7 w-3/4 mt-10 px-2 py-5">
                <div><h2
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm ở miền nam
                </h2></div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {mienNamLuuTru.map((item) =>
                                <Link to={`/booking/${item.id}`} >
                                    <>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </>
                                </Link>
                            )}
                        </>
                    ) : (
                        <>Chưa xuất ra được</>
                    )
                    }
                    {mienNamLuuTru.length > 3 && (
            <div onClick={handleToggleMienNam} className="text-sm text-blue-300 cursor-pointer">
              {showAllMienNam ? 'Ẩn bớt' : 'Xem thêm'}
            </div>
          )}
                </div>
            </div>
            <div className="mx-auto mb-7 w-3/4 mt-10 px-2 py-5">
                <div><h2
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm ở miền trung
                </h2></div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {mienTrungLuuTru.map((tenks) =>
                                <>
                                    <Link>
                                        <div className="text-sm text-blue-300">Khách sạn {tenks.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa xuất ra được</>
                    )
                    }
                </div>
            </div>
            <div className="mx-auto mb-7 w-3/4 mt-10 px-2 py-5">
                <div><h3
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm ở miền bắc
                </h3></div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {mienBacLuuTru.map((tenks) =>
                                <>
                                    <Link>
                                        <div className="text-sm text-blue-300">Khách sạn {tenks.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa xuất ra được</>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default ListKhuVucLayout;