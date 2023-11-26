import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';

const Tabs = () => {
  // const [luutruCountByDanhMuc, setLuutruCountByDanhMuc] = useState({});
  const { data: tinhthanh1 } = useDocsQuery('danhmuc');
  const { data: tinhthanh2 } = useDocsQuery('danhmuc');
  const { data: tinhthanh3 } = useDocsQuery('danhmuc');

  const filteredDanhmucMienBac = tinhthanh1.filter((danhmuc) => danhmuc.khuvuc === 'Miền Bắc');
  const filteredDanhmucMienNam = tinhthanh2.filter((danhmuc) => danhmuc.khuvuc === 'Miền Nam');
  const filteredDanhmucMienTrung = tinhthanh3.filter((danhmuc) => danhmuc.khuvuc === 'Miền Trung');


  return (
    <>
      <BasicTabs
        tinhthanh1={filteredDanhmucMienBac}
        tinhthanh2={filteredDanhmucMienNam}
        tinhthanh3={filteredDanhmucMienTrung}

      />
    </>
  );
};

export default Tabs;
