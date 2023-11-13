export default function Loclayout({
    handleClickHangSao, handleClickLoc, handleClickLuuTru, idhangsao, idloc, idluutru,
    openhangsao, openloc, openluutru, anchorEHangSao, anchorELoc, anchorELuutru, handleCloseHangSao,
    handleCloseLoc, handleCloseLuuTru
}){
    return (
        <>
            <div className="mx-auto mt-4 mb-7 w-3/4 shadow-2xl border-none rounded-lg">
                <div className='flex flex-wrap 2xl:flex-nowrap w-full rounded-lg bg-white overflow-hidden grid grid-flow-row-dense grid-cols-6'>
                    <div className="xs:px-2 2xl:px-2 RefinementRow_placeholder__ID_8D bg-white form-loc col-span-2">
                        <button type="button" className='class="text-left w-full relative RefinementRowElement_refinementRowBtn__X8AFx group pt-1/2"'>
                            <span className='mb-31 pl-3 truncate block text-left'>Giá: <span>Mỗi đêm</span></span>
                            <span className='flex items-center group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300'>
                                <span className='truncate w-full'>
                                    <span>0đ-13.000.000đ</span>
                                </span>
                                <span className='class="inline-flex leading-none rotate-90 transform transform"'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path vector-effect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="xs:px-2 2xl:px-2 RefinementRow_placeholder__ID_8D bg-white">
                        <button type="button" className="text-left w-full relative RefinementRowElement_refinementRowBtn__X8AFx group pt-1/2">
                            <span className='mb-31 pl-3 truncate block text-left'>Bộ lọc</span>
                            <Button onClick={handleClickLoc} className='flex items-center group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300'>
                                <span className='truncate w-full'>Chọn</span>
                                <span className='class="inline-flex leading-none rotate-90 transform transform"'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path vector-effect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                                </span>
                            </Button>
                        </button>
                        <Popover
                            id={idloc}
                            open={openloc}
                            anchorEl={anchorELoc}
                            onClose={handleCloseLoc}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <span>Hạng sao</span>
                            <div>
                                <Typography sx={{ p: 2 }}>1 sao</Typography>
                                <Typography sx={{ p: 2 }}>2 sao</Typography>
                                <Typography sx={{ p: 2 }}>3 sao</Typography>
                                <Typography sx={{ p: 2 }}>4 sao</Typography>
                                <Typography sx={{ p: 2 }}>5 sao</Typography>
                            </div>
                        </Popover>
                    </div>
                    <div className="xs:px-2 2xl:px-2 RefinementRow_placeholder__ID_8D bg-white">
                        <button type="button" className="text-left w-full relative RefinementRowElement_refinementRowBtn__X8AFx group pt-1/2">
                            <span className='mb-31 pl-3 truncate block text-left'>Hạng sao</span>
                            <Button onClick={handleClickHangSao} className='flex items-center group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300'>
                                <span className='truncate w-full'>Đánh giá bất kì</span>
                                <span className='class="inline-flex leading-none rotate-90 transform transform"'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path vector-effect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                                </span>
                            </Button>
                        </button>
                        <Popover
                            id={idhangsao}
                            open={openhangsao}
                            anchorEl={anchorEHangSao}
                            onClose={handleCloseHangSao}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div>
                                <Typography sx={{ p: 2 }}>1 sao Tàm tạm</Typography>
                                <Typography sx={{ p: 2 }}>2 sao Ổn</Typography> 
                                <Typography sx={{ p: 2 }}>3 sao Tốt</Typography>
                                <Typography sx={{ p: 2 }}>4 sao Rất tốt</Typography> 
                                <Typography sx={{ p: 2 }}>5 sao Xuất sắc</Typography> 
                            </div>
                        </Popover>
                    </div>
                    <div className="xs:px-2 2xl:px-2 RefinementRow_placeholder__ID_8D bg-white">
                        <button type="button" className="text-left w-full relative RefinementRowElement_refinementRowBtn__X8AFx group pt-1/2">
                            <span className='mb-31 pl-3 truncate block text-left'>Loại nơi lưu trú</span>
                            <Button onClick={handleClickLuuTru} className='flex items-center group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300'>
                                <span className='truncate w-full'>Tất cả</span>
                                <span className='class="inline-flex leading-none rotate-90 transform transform"'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path vector-effect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                                </span>
                            </Button>
                        </button>
                        <Popover
                            id={idluutru}
                            open={openluutru}
                            anchorEl={anchorELuutru}
                            onClose={handleCloseLuuTru}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div>
                                <Typography sx={{ p: 1 }}>Hotel</Typography>
                                <Typography sx={{ p: 1 }}>Homestay</Typography>
                            </div>
                        </Popover>
                    </div>
                    <div className="xs:px-2 2xl:px-2 RefinementRow_placeholder__ID_8D bg-white">
                        <button type="button" className='class="text-left w-full relative RefinementRowElement_refinementRowBtn__X8AFx group pt-1/2"'>
                            <span className='mb-31 pl-3 truncate block text-left'>Vị trí</span>
                            <span className='flex items-center group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300'>
                                <span className='truncate w-full'>
                                    <span>Trung tâm thành phố</span>
                                </span>
                                <span className='class="inline-flex leading-none rotate-90 transform transform"'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path vector-effect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
