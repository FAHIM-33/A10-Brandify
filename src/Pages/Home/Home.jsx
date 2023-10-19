import Footer from "../../Components/Footer";
import Banner from "./Banner";
import Brands from "./Brands";
import Join from "./Join";
import Locations from "./Locations";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Brands></Brands>
            <Locations></Locations>
            <Join></Join>
            <Footer></Footer>
        </div>
    );
};

export default Home;