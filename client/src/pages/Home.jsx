import Navbar from "../components/Navbar";
import Footbar from "../components/Footbar";
import banner from "../Images/BannerImages/banner4.png";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex justify-center items-center ">
        <img className="h-[600px]" src={banner}></img>
      </div>
      <Footbar />
    </div>
  );
};

export default Home;
