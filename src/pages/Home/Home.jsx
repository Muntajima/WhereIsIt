import HelpLine from "../../context/Authcontext/HelpLine";
import Video from "../Video/Video";
import Banner from "./Banner";
import LostFoundItems from "./LostFoundItems";
import Organization from "./Organization/Organization";

const Home = () => {
    return (
        <div>
          <Banner/>
          <LostFoundItems/>  
          <HelpLine/>
          <Organization/>
          <Video/>
        </div>
    );
};

export default Home;<h2>it is home</h2>