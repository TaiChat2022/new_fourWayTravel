const LichSuDPLayout = ({
    Link, currentUser, userDatPhong, luuTru
}) => {
    // Filter luuTru items based on the luuTruId in userDatPhong
    const filteredLuuTru = luuTru.filter(luuTruItem =>
        userDatPhong.some(datPhongItem => datPhongItem.luuTruId === luuTruItem.id)
    );
    return (
        <>
            {currentUser ? (
                <>
                    <main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
                        <span className="self-start mr-10">
                            <Link
                                to="/"
                                className="flex items-center text-blue-500 text-md hover:text-blue-700"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                                Trước
                            </Link>
                        </span>
                        <div className="w-full">
                            {filteredLuuTru.length > 0 ?
                                (
                                    <>
                                        <div className="px-2 w-3/4 m-auto flex gap-1 justify-start items-center">
                                            {filteredLuuTru.map((item, index) => (
                                                <div key={index}>
                                                    <img className="w-20 h-20" src={item.img} alt={item.title} />
                                                    <p>
                                                        {item.title}
                                                    </p>
                                                    <p>
                                                        {(item.price).toLocaleString('vi')} VND
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                        Bạn chưa có đặt phòng nào !
                                    </>
                                )}
                        </div>
                    </main>
                </>
            ) : (
                <>
                    <main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
                        <span className="self-start mr-10">
                            <Link
                                to="/"
                                className="flex items-center text-blue-500 text-md hover:text-blue-700"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                                Trước
                            </Link>
                        </span>

                        <div className="flex items-center px-3 py-3 mb-5 border rounded-lg shadow-3xl border-gray-300 ">
                            <span className="inline-flex p-2 mr-2 leading-none transform bg-blue-200 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="max-w-full max-h-full pointer-events-none"
                                >
                                    <path
                                        d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            <section>
                                <h2 className="font-bold text-heading-m text-gray-900">
                                    Theo dõi nơi lưu trú bạn thích
                                </h2>
                                <p className="text-m ">
                                    <button
                                        id="favorites-login"
                                        className="px-1 text-blue-800 cursor-pointer hover:underline "
                                    >
                                        Đăng nhập hoặc tạo tài khoản
                                    </button>
                                    để lưu nơi lưu trú bạn thích vào tài khoản và tạo danh sách riêng của mình.
                                </p>
                            </section>
                        </div>
                    </main>
                </>
            )}
        </>
    );
};

export default LichSuDPLayout;