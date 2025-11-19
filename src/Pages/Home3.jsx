import About1 from "../Components/About/About1";
import Hero3 from "../Components/Banner/Hero3";
import Faq2 from "../Components/Faq/Faq2";
import Process2 from "../Components/Process/Process2";
import Services3 from "../Components/Services/Services3";


const Home3 = () => {
    return (
        <div className="home-page3">
            <Hero3></Hero3>
            <Services3></Services3>
            <About1
                MainImg="/assets/images/about-thumb.png"
                SubTitle="PANTRIAPP"
                Title="Smart Living, Powered by <span>PantriOS</span>"
                Content="Intelligent automation meets real-world convenience. From grocery delivery to laundry tracking, PantriOS™ connects your household to everything that saves time."
                listTitle="Cloud Based Solution"
                BottomText="Monotonectally repurpose maintainable infrastruct whereas pantri in fermentum quis tempo sapien maximus design."
                BtnUrl="/about"
                BtnText="Explore PantriOS"
            ></About1>
            <Process2
                BtnUrl="/about"
            ></Process2>
            <Faq2></Faq2>
        </div>
    );
};

export default Home3;