import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import React from 'react';
const Tabs = () => {

  const { data: luuTru } = useDocsQuery('luuTru');
  const { data: tinhthanh1 } = useDocsQuery('danhmuc');
  const { data: tinhthanh2 } = useDocsQuery('danhmuc');
  const { data: tinhthanh3 } = useDocsQuery('danhmuc');

  const filteredDanhmucMienBac = React.useMemo(() =>
    tinhthanh1.filter((danhmuc) => danhmuc.khuvuc === 'Miền Bắc'),
    [tinhthanh1]
  );
  const filteredDanhmucMienNam = React.useMemo(() =>
    tinhthanh2.filter((danhmuc) => danhmuc.khuvuc === 'Miền Nam'),
    [tinhthanh2]
  );
  const filteredDanhmucMienTrung = React.useMemo(() =>
    tinhthanh3.filter((danhmuc) => danhmuc.khuvuc === 'Miền Trung'),
    [tinhthanh3]
  );


  const getCounts = (tinhthanh) => {
    return tinhthanh.map((danhmuc) => {
      return luuTru.reduce((count, item) => {
        return item.danhmuc === danhmuc.text ? count + 1 : count;
      }, 0);
    });
  };

  const [countsArray, setCountsArray] = React.useState([[0], [1], [2]]);

  React.useEffect(() => {
    setCountsArray([
      getCounts(filteredDanhmucMienBac),
      getCounts(filteredDanhmucMienNam),
      getCounts(filteredDanhmucMienTrung)
    ]);
  }, [luuTru, filteredDanhmucMienBac, filteredDanhmucMienNam, filteredDanhmucMienTrung]);
  return (
    <>
      <BasicTabs
        tinhthanh1={filteredDanhmucMienBac}
        tinhthanh2={filteredDanhmucMienNam}
        tinhthanh3={filteredDanhmucMienTrung}

        luuTru={luuTru}

        countsArray={countsArray}
      />
    </>
  );
};

export default Tabs;
