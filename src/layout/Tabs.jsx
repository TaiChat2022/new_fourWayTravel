import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Tabs.css';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs({ tinhthanh1, tinhthanh2, tinhthanh3, matchCount, allUserXemGanDay }) {
  const [value, setValue] = useState(0);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="container mt-4 bg-2 py-0 px-3 rounded-lg">
        <div className="mt-4 pt-2 font-medium text-xl">
          <i className="fa-brands fa-searchengin"></i> Tìm kiếm phổ biến
        </div>
        <Box className="search-tabs">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{ fontSize: '12px', fontWeight: '600' }}
              className="tabs"
              label="Miền bắc"
              {...a11yProps(0)}
            />
            <Tab
              style={{ fontSize: '12px', fontWeight: '600' }}
              className="tabs"
              label="Miền trung"
              {...a11yProps(1)}
            />
            <Tab
              style={{ fontSize: '12px', fontWeight: '600' }}
              className="tabs"
              label="Miền nam"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        {allUserXemGanDay.map((item, index) => {
          <>
            <div key={index}>
              <p>{item.id}</p>
            </div>
          </>
        })}
        {tinhthanh1 ? (
          <>
            <TabPanel value={value} index={0} className="p-0">
              <div className="grid grid-cols-4 gap-4 w-full md:h-300">
                {tinhthanh1.slice(0, 4).map((item) => (
                  <Link to={`/booking/${item.text}`} key={item.id} className='col-span-4 sm:col-span-2 md:col-span-1'>
                    <div className="box-img relative">
                      <div className="backdrop-blur-sm w-full bg-black/30 bottom-0 absolute p-2">
                        <h4 className="name-travel">{item.text}</h4>
                        <h4 className="total-room">
                          <span className="total-number">{matchCount}</span> views
                        </h4>
                      </div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="image"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </TabPanel>

          </>
        ) : (
          <>
            <p>Không lấy được dữ liệu địa danh</p>
          </>
        )}

        {tinhthanh3 ? (
          <>
            <TabPanel value={value} index={1} >
              <div className="grid grid-cols-4 gap-4 w-full md:h-300">
                {tinhthanh3.slice(0, 4).map((item) => (
                  <Link to="/booking" key={item.id} className='col-span-4 sm:col-span-2 md:col-span-1'>
                    <div className="box-img relative">
                      <div className="backdrop-blur-sm w-full bg-black/30 bottom-0 absolute p-2">
                        <h3 className="name-travel">{item.text}</h3>
                        <h3 className="total-room">
                          <span className="total-number">1.615</span> Khách sạn
                        </h3>
                      </div>
                      <img
                        src={item.img}
                        alt=""
                        className="image"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </TabPanel>
          </>
        ) : (
          <>
            <p>Không lấy được dữ liệu địa danh</p>
          </>
        )}

        {tinhthanh2 ? (
          <>
            <TabPanel value={value} index={2}>
              <div className="grid grid-cols-4 gap-4 w-full md:h-300">
                {tinhthanh2.slice(0, 4).map((item) => (
                  <Link to="/booking" key={item.id} className='col-span-4 sm:col-span-2 md:col-span-1'>
                    <div className="box-img relative">
                      <div className="backdrop-blur-sm w-full bg-black/30 bottom-0 absolute p-2">
                        <h3 className="name-travel">{item.text}</h3>
                        <h3 className="total-room">
                          {/* <div>Số lượng người dùng đã xem gần đây khu vực Miền Nam: {matchingUsersCount}</div> */}
                        </h3>
                      </div>
                      <img
                        src={item.img}
                        alt=""
                        className="image"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </TabPanel>
          </>
        ) : (
          <>
            <p>Không lấy được dữ liệu địa danh</p>
          </>
        )}
      </Box>
    </>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
