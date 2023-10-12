export default function MenuLayOut({
    Logo, Link, Login,
    Button, Menu, MenuItem, anchorEl, open, handleClick, handleClose,

    currincey, ITEM_HEIGHT, anchorE2, open2, handleClick2, handleClose2,
    selectedCurrency, handleCurrencyChange,

    language, anchorE3, open3, handleClick3, handleClose3,
    selectedLanguage, handleLanguageChange
}) {
    return (
        <>
            <nav className="mx-auto border-2 px-4 2xs:px-5 l:px-10 2xl:px-5">
                <div className="fresnel-container fresnel-lessThan-2xl ">
                    <header className="flex justify-between items-center h-14">
                        <Link to='/'>
                            <img src={Logo} alt="Logo FourWay Travel" className="object-contain w-96 h-96" />
                        </Link>
                        <nav className="h-full self-end ml-auto">
                            <ul className="flex h-full mr-2 s:mr-0 text-grey-900">
                                <li className="h-full list-none flex relative">
                                    <div className="flex justify-center">
                                        <Link to="#" className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4">
                                            <i className="fa-regular fa-heart leading-none inline-flex transform"></i>
                                            <span className="flex-grow text-md text-black space-nowrap mx-2">
                                                Yêu thích
                                            </span>
                                        </Link>
                                    </div>
                                </li>
                                <li className="h-full list-none flex relative">
                                    <div className="flex justify-center">
                                        <div className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-4">
                                            <Button
                                                className="flex-grow text-md space-nowrap mx-2"
                                                id="long-button"
                                                aria-controls={open2 ? 'long-menu' : undefined}
                                                aria-expanded={open2 ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick2}
                                            >
                                                <span className="flex-grow text-md text-black space-nowrap mx-2">
                                                    {selectedCurrency.split(" - ")[0]}
                                                </span>
                                                <i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black"></i>
                                            </Button>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorE2}
                                                open={open2}
                                                onClose={handleClose2}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                        width: '20ch',
                                                    },
                                                }}
                                            >
                                                {currincey.map((option) => (
                                                    <MenuItem key={option} selected={option === selectedCurrency} onClick={() => handleCurrencyChange(option)}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </div>
                                    </div>
                                </li>
                                <li className="h-full list-none flex relative">
                                    <div className="flex justify-center">
                                        <div className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-4">
                                            <Button
                                                className="flex-grow text-md space-nowrap mx-2"
                                                id="long-button"
                                                aria-controls={open3 ? 'long-menu' : undefined}
                                                aria-expanded={open3 ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick3}
                                            >
                                                <span className="flex-grow text-md text-black space-nowrap mx-2">
                                                    {selectedLanguage.split(" - ")[0]} {/* Hiển thị chỉ phần đầu của chuỗi */}
                                                </span>
                                                <i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black"></i>
                                            </Button>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorE3}
                                                open={open3}
                                                onClose={handleClose3}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                        width: '20ch',
                                                    },
                                                }}
                                            >
                                                {language.map((option) => (
                                                    <MenuItem key={option} selected={option === selectedLanguage} onClick={() => handleLanguageChange(option)}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </div>
                                    </div>
                                </li>
                                <Login />
                                <li className="h-full list-none flex relative">
                                    <div className="flex justify-center">
                                        <div className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4">
                                            <Button
                                                className="flex-grow text-md space-nowrap mx-2"
                                                id="menu-btn"
                                                aria-controls={open ? 'menu-btn' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <i className="fa-solid fa-bars leading-none inline-flex transform text-black"></i>
                                                <span className="flex-grow text-md text-black space-nowrap mx-2">
                                                    Menu
                                                </span>
                                            </Button>
                                            <Menu
                                                id="menu-btn"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'menu-btn',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Xem gần đây</MenuItem>
                                                <MenuItem onClick={handleClose}>Hỗ trợ và trợ giúp</MenuItem>
                                            </Menu>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </nav >
        </>
    );
}