const ProductLayout = ({ luuTru, renderStars, Link, hotLuuTru, khachSanVip }) => {
	return (
		<>
			<div className="mx-auto mb-7 w-3/4 mt-10 px-0 py-0 ">
				<h1 className="py-5 search-title pt-2">Top khách sạn hot </h1>
				<div className="overflow-y-hidden overflow-x-auto">
					<div className="flex w-screen mb-4 gap-4">
						{luuTru ? (
							<>
								{hotLuuTru.map((item) => (
									<>
										<Link to={`/booking/${item.id}`}>
											<div className="col-span-1 relative">
												<img
													src={item.img}
													alt=""
													className="w-80 h-80 rounded-md"
												/>
												<div className="content absolute bottom-2 left-2 text-white backdrop-blur-sm">
													<h2 className="">{item.title}</h2>
													<div>{renderStars(item.star)}</div>
													<div>{item.price.toLocaleString('vi')} VND</div>
												</div>
											</div>
										</Link>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<div className="mx-auto mb-7 w-3/4 mt-10 px-0 py-0 ">
				<h1 className="py-5 search-title pt-2">Top khách sạn sang trọng </h1>
				<div className="overflow-y-hidden overflow-x-auto">
					<div className="flex w-screen mb-4 gap-4">
						{luuTru ? (
							<>
								{khachSanVip.map((item) => (
									<>
										<Link to={`/booking/${item.id}`}>
											<div className="col-span-1 relative w-60 h-60">
												<img
													src={item.img}
													alt=""
													className="rounded-md"
												/>
												<div className="content absolute bottom-2 left-2 text-white backdrop-blur-sm">
													<h2 className="">{item.title}</h2>
													<div>{renderStars(item.star)}</div>
													<div>{item.price.toLocaleString('vi')} VND</div>
												</div>
											</div>
										</Link>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductLayout;
