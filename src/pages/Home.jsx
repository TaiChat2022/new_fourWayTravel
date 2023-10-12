import SearchBar from '../layout/searchBar';

const Home = () => {
    return (
        <>
            <div class="mx-auto mb-5 px-7 2xs:px-8 l:px-14 2xl:px-5 w-3/4 mt-4">
                <h1 class="text-3xl font-bold leading-tight">
                    <span>Chúng tôi so sánh</span>
                    giá phòng từ nhiều trang
                </h1>
            </div>
            <SearchBar />
        </>
    );
};

export default Home;

