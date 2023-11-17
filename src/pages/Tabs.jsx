import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import { useEffect, useState } from 'react';

const Tabs = () => {

  const [luuTruCountByDanhMuc, setLuuTruCountByDanhMuc] = useState({});
  const { data: tinhthanh1 } = useDocsQuery('danhmuc');
  const { data: tinhthanh2 } = useDocsQuery('danhmuc');
  const { data: tinhthanh3 } = useDocsQuery('danhmuc');

  const filteredDanhmucMienBac = tinhthanh1.filter((danhmuc) => danhmuc.khuvuc === 'Miền Bắc');
  const filteredDanhmucMienNam = tinhthanh2.filter((danhmuc) => danhmuc.khuvuc === 'Miền Nam');
  const filteredDanhmucMienTrung = tinhthanh3.filter((danhmuc) => danhmuc.khuvuc === 'Miền Trung');

  const { data: dsbookingMienNam } = useDocsQuery('luuTru');
  const filteredBookingMienNam = dsbookingMienNam.filter((luuTru) => luuTru.khuvuc === 'Miền Nam');

  useEffect(() => {

    const fetchLuuTruCountByDanhMuc = async () => {
      // Example function, replace this with your actual implementation
      const luuTruCountData = await fetchLuuTruCount(); // Assuming you have a function to fetch luuTruCount
      setLuuTruCountByDanhMuc(luuTruCountData);
    };

    fetchLuuTruCountByDanhMuc();

  }, []); // Ensure that this e

  return (
    <>
      <BasicTabs
        tinhthanh1={filteredDanhmucMienBac}
        tinhthanh2={filteredDanhmucMienNam}
        tinhthanh3={filteredDanhmucMienTrung}
        luuTruCountByDanhMuc={luuTruCountByDanhMuc}
      />
    </>
  );
};

export default Tabs;