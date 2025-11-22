import About4 from "../Components/About/About4";
import AboutNew from "../Components/About/AboutNew";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import ImageTwentyFive from '/assets/images/about-second-image.png';
import aboutThirdImage from '/assets/images/about-third-image.png';
import aboutFouthImage from '/assets/images/about-fouth-image.png';
import aboutUsThuThird from "/assets/images/about-us-thu-third.png";
import aboutUsThuSecond from "/assets/images/about-us-thu-second.png";
import banner from "/assets/images/about-banner.png";
import AboutTop from "../Components/About/AboutTop";
import HowItsWork from "../Components/Common/HowItsWork";

const About = () => {

    const AboutTopSec = {
        title: 'About PantriApp',
        description: "At Pantri App, we believe in bringing the comfort, convenience, and personal touch of at‑home services to busy lives. Whether you’re a professional, a family, or a homeowner, our mission is to simplify your day‑to‑day living.",
        descriptionTwo : "With Pantri App, you’ll connect with trusted, vetted providers who step into your home, work with your ingredients, and leave you with something better: time, space, and peace of mind. It’s more than a service; it’s a community built for ease."
    }

    const AboutTopSecTwo = {
        title: 'Why PantriApp?',
        description: "PantriApp is the world’s first Household OS, designed to simplify and elevate everyday living. More than a platform, it’s a system that helps households run smoothly - reducing clutter, easing stress, and restoring balance.",
        descriptionTwo : "From personalized meal prep to laundry and home organization, Pantri App integrates trusted providers, secure services, and transparent reviews into one seamless experience. The result: a home managed with efficiency, care, and confidence - so you can focus on what matters most, without worry."
    }

    const content = {
        title: 'Empowering Homes, Empowering Providers',
        // ThirdImage: aboutFouthImage,
        FristImage: ImageTwentyFive,
        // secondImage: aboutThirdImage,

    }

    const about = {
        title: "A platform you can trust",
        Content: "Built for Providers, Powered by Community. PantriOS empowers local chefs, organizers, and laundry pros to grow their businesses. By connecting them with households that value their craft, we strengthen communities and create opportunities for everyone.",
        leftImage: null,
        RightImage: aboutUsThuSecond
    }

    const aboutTwo = {
        title: "Community Engagement",
        Content: "Pantri App isn’t just a platform - it’s a commitment to redefine freedom. Beyond everyday services, we pledge quarterly volunteer support for households who need it most. By giving back directly to the community, we strengthen trust, foster connection, and ensure that freedom and care reach those who might otherwise go without. Join us in our efforts and Sign Up.",
        leftImage: aboutUsThuThird,
        thirdImage: "image",
        RightImage: null
    }

    return (
        <div className="about-page">
            <BreadCumbAbout image={banner} />
            <AboutTop AboutTopSec={AboutTopSec} />
            <About4 about={about} />
            <AboutNew content={content} />
            <About4 about={aboutTwo} />
            <AboutTop AboutTopSec={AboutTopSecTwo} />
            <HowItsWork />
        </div>
    );
};

export default About;