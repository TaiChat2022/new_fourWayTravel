import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import React from 'react';

function sanitizeAddress(address) {
  if (address === undefined || address === null) {
    return '';
  }
  // Normalize and remove diacritics
  let cleanAddress = address.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Remove spaces
  cleanAddress = cleanAddress.replace(/\s+/g, '');
  return cleanAddress;
}

const Tabs = () => {

  const { data: khachsan } = useDocsQuery('khachsan');
  const { data: tinhthanh1 } = useDocsQuery('tinhthanh');
  const { data: tinhthanh2 } = useDocsQuery('tinhthanh');
  const { data: tinhthanh3 } = useDocsQuery('tinhthanh');

  const filteredTinhThanhMienBac = React.useMemo(() =>
    tinhthanh1.filter((tinhthanh) => tinhthanh.vungMien === 'Miền Bắc'),
    [tinhthanh1]
  );
  const filteredTinhThanhMienNam = React.useMemo(() =>
    tinhthanh2.filter((tinhthanh) => tinhthanh.vungMien === 'Miền Nam'),
    [tinhthanh2]
  );
  const filteredTinhThanhMienTrung = React.useMemo(() =>
    tinhthanh3.filter((tinhthanh) => tinhthanh.vungMien === 'Miền Trung'),
    [tinhthanh3]
  );

  const getCounts = (tinhthanh) => {
    return tinhthanh.map((tinhthanhItem) => {
      return khachsan.reduce((count, item) => {
        return item.tinhthanh === tinhthanhItem.text ? count + 1 : count;
      }, 0);
    });
  };

  const [countsArray, setCountsArray] = React.useState([[0], [1], [2]]);

  React.useEffect(() => {
    setCountsArray([
      getCounts(filteredTinhThanhMienBac),
      getCounts(filteredTinhThanhMienNam),
      getCounts(filteredTinhThanhMienTrung)
    ]);
  }, [khachsan, filteredTinhThanhMienBac, filteredTinhThanhMienNam, filteredTinhThanhMienTrung]);

  return (
    <>
      <BasicTabs
        tinhthanh1={filteredTinhThanhMienBac}
        tinhthanh2={filteredTinhThanhMienNam}
        tinhthanh3={filteredTinhThanhMienTrung}
        khachsan={khachsan}
        countsArray={countsArray}
        sanitizeAddress={sanitizeAddress}
      />
    </>
  );
};

export default Tabs;
