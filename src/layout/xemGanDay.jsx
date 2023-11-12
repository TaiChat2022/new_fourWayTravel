
const XemGanDayLayout = ({
    currentUser,
    luuTru, userXemGanDay,
}) => {
    return (
        <>
            <div className="w-3/4 mx-auto my-2">
                <h1 className="text-2xl ml-1">Xem gần đây</h1>
                {currentUser ? (
                    userXemGanDay ? (
                        <>
                            {luuTru
                                .filter((item) => userXemGanDay.includes(item.id))
                                .map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <p>{item.title}</p>
                                        </div>
                                    );
                                })}
                        </>
                    ) : (
                        <p>Không có mục nào trong danh sách xem gần đây.</p>
                    )
                ) : (
                    <p>Vui lòng đăng nhập để xem danh sách xem gần đây.</p>
                )}
            </div>
        </>
    );
};

export default XemGanDayLayout;