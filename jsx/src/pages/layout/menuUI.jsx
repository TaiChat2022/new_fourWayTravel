import React from 'react';
import '../../assets/css/custom_color.css';
import '../../assets/css/menu.css';
const MenuUI = ({
    user,
    Link,
    signOut,
    isDropdownOpen,
    toggleDropdown,

    currentMenu, selectedMenu,
    resetMenus , handleMenuClick
}) => {
    return (
        <>
            <nav className="custom_bg_color__300">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/trangchu" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold custom_text_color_white__200">FourWay Travel</span>
                    </Link>
                    <div className='flex items-center gap-2'>
                        <div className="md:block md:w-auto" >
                            {user ? (
                                <>
                                    <button
                                        type="button"
                                        className={`
                                            inline-flex items-center p-2 justify-center
                                            text-lg font-medium gap-1 rounded-lg
                                            custom_bg_color_white__100
                                        `}
                                        onClick={toggleDropdown}
                                    >
                                        <h2 className='custom_text_color__100 '>{user.displayName}</h2>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div className='relative'>
                                        <div
                                            className={`${isDropdownOpen ? '' : 'hidden'} 
                                                w-full mt-2 absolute 
                                            `}
                                            id="user-dropdown"
                                        >
                                            <ul className="py-2 text-lg custom_bg_color_white__100 p-2 rounded-lg">
                                                <li>
                                                    <button className='custom_text_color__100' onClick={signOut}>Đăng xuất</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) 
                            : 
                            (
                                <>
                                    <ul className="flex font-medium gap-1 rounded-lg">
                                        <li>
                                            <Link to='/login' className="block px-4 py-2 custom_bg_color_white__100 rounded-sm custom_text_color__400" aria-current="page">
                                                Đăng ký
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' className="block px-4 py-2 custom_bg_color_white__100 rounded-sm custom_text_color__400" aria-current="page">
                                                Đăng nhập
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            )
                            }
                        </div>
                        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-sky-600 dark:hover:text-white" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 custom_bg_color__300">
                            <Link onClick ={()=>handleMenuClick('luutru')}
                                aria-current="page">
                                <li className={`flex items-center py-2 pl-3 pr-4 custom_menu_hover rounded-lg ${currentMenu === 'luutru' ? 'custom_menu_clicked' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-door-open-fill w-5 h-5 mr-2" viewBox="0 0 16 16">
                                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                    </svg>
                                    Lưu trú
                                </li>
                            </Link>
                            <Link onClick={()=>handleMenuClick('khachsan')} >
                                <li className={`flex items-center py-2 pl-3 pr-4 custom_menu_hover rounded-lg ${currentMenu === 'khachsan' ? 'custom_menu_clicked' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-building-fill w-5 h-5 mr-2" viewBox="0 0 16 16">
                                        <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                    Khách sạn
                                </li>
                            </Link>
                            <Link  onClick ={()=>handleMenuClick('diadiemthamquan')}>
                                <li className={`flex items-center py-2 pl-3 pr-4 custom_menu_hover rounded-lg ${currentMenu === 'diadiemthamquan' ? 'custom_menu_clicked' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-globe-asia-australia w-5 h-5 mr-2" viewBox="0 0 16 16">
                                        <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z" />
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z" />
                                    </svg>
                                    Địa điểm tham quan
                                </li>
                            </Link>
                            <Link  onClick ={()=>handleMenuClick('taxi')} >
                                <li className={`flex items-center py-2 pl-3 pr-4 custom_menu_hover rounded-lg ${currentMenu === 'taxi' ? 'custom_menu_clicked' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-taxi-front-fill w-5 h-5 mr-2" viewBox="0 0 16 16">
                                        <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.807.807 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413c0-.165-.016-.329-.049-.49l-.335-1.68a1.807 1.807 0 0 0-.964-1.261.807.807 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1H6ZM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4ZM4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                                    </svg>
                                    Taxi
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MenuUI;