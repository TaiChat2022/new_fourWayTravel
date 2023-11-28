const XemGanDayLayout = ({ currentUser, userXemGanDay, Link }) => {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h1 className="mt-4 mb-2 text-2xl font-semibold leading-tight font-poppins">Xem gần đây</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentUser ? (
            userXemGanDay && userXemGanDay.length ? (
              [...userXemGanDay].reverse().slice(0, 4).map((item) => {
                const formattedDate =
                  item.lastViewed && typeof item.lastViewed.toDate === "function"
                    ? item.lastViewed.toDate().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    : "";

                return (
                  <Link to={`/booking/chitiet/${item.id}`}>
                    <div
                      key={item.id}
                      className="border border-gray-300 p-0 rounded-md relative grid grid-col-4"
                    >
                      <p className="text-lg text-gray-900 font-bold absolute top-0 right-0">
                        {formattedDate}{" "}
                      </p>
                      <div className="flex items-center col-span-1 relative">
                        <div className="p-2 w-20 h-20">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="rounded-lg w-full h-full  object-cover"
                          />
                        </div>
                        <div className="flex flex-col truncatee">
                          <p className="text-base font-semibold text-sm">{item.title}</p>
                          <p className="text-base text-sm ">{item.danhMuc}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>Không có mục nào trong danh sách xem gần đây.</p>
            )
          ) : (
            <p>Vui lòng đăng nhập để xem danh sách xem gần đây.</p>
          )}
        </div>
      </div >
    </>
  );
};

export default XemGanDayLayout;
