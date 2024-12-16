import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";


const Home = () => {
    return (
      <div>
        <div>
          <Banner></Banner>
        </div>
        <div className="mt-20">
            <FeaturedJobs></FeaturedJobs>
        </div>
      </div>
    );
};

export default Home;