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

export default function BasicTabs({ tinhthanh1, tinhthanh2, tinhthanh3 }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="container mt-0 bg-2 py-0 px-3 rounded-lg">
        <Box className="search-title pt-2">Tìm kiếm phổ biến</Box>
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

        {tinhthanh1 ? (
          <>
            <TabPanel value={value} index={0} className="p-0">
              <div className="flex flex-wrap justify-center md:justify-between gap-x-4 p-0 md:flex-nowrap">
                {tinhthanh1.slice(0, 3).map((item) => (
                  <Link to="#" key={item.id}>
                    <div className="box-img">
                      <div className="box-content">
                        <h3 className="name-travel">{item.text}</h3>
                        <h3 className="total-room">
                          <span className="total-number">1.615</span> Khách sạn
                        </h3>
                      </div>
                      <img
                        src="https://vcdn-vnexpress.vnecdn.net/2023/07/03/catb-9687-1688394483.jpg"
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

        {tinhthanh3 ? (
          <>
            <TabPanel value={value} index={1}>
              <div className="grid grid-cols-4 gap-4">
                {tinhthanh3.slice(0, 3).map((item) => (
                  <Link to="#" key={item.id}>
                    <div className="box-img">
                      <div className="box-content">
                        <h3 className="name-travel">{item.text}</h3>
                        <h3 className="total-room">
                          <span className="total-number">1.615</span> Khách sạn
                        </h3>
                      </div>
                      <img
                        src="https://grandcenterquynhon.com.vn/images/tt_duan1a.jpg"
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
            <TabPanel value={value} index={2} className="">
              <div className="grid grid-cols-4 gap-4">
                {tinhthanh2.slice(0, 3).map((item) => (
                  <Link to="#" key={item.id}>
                    <div className="box-img">
                      <div className="box-content">
                        <h3 className="name-travel">{item.text}</h3>
                        <h3 className="total-room">
                          <span className="total-number">1.615</span> Khách sạn
                        </h3>
                      </div>
                      <img
                        src="https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
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
