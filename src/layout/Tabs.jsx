import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
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

export default function BasicTabs({ value, sortedData, handleChange, }) {

  return (
    <>
      <Box className="container my-4 rounded-lg">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {sortedData.map((vung, index) => (
            <Tab key={vung.id} label={vung.tenVungMien} {...a11yProps(index)} />
          ))}
        </Tabs>

        {sortedData.map((vung, index) => (
          <TabPanel key={vung.id} value={value} index={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto md:h-300">
              {vung.tinhthanh.map(tt => (
                <Link to={`/booking//${tt.id}`} key={tt.id}>
                  <div className='box-img relative'>
                    <div className="backdrop-blur-sm w-full z-50 bg-black/30 bottom-0 absolute p-2">
                      <h4 className="name-travel">{tt.tenTinhThanh}</h4>
                      <h4 className="total-room">
                        <span className="total-number">{tt.count}</span> Khách Sạn
                      </h4>
                    </div>
                    <img src={tt.img} alt={tt.tenTinhThanh} className="image" />
                  </div>
                </Link>
              ))}
            </div>
          </TabPanel>
        ))}
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
