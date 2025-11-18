import About4 from "../Components/About/About4";
import AboutNew from "../Components/About/AboutNew";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import ImageTwentyFive from '/assets/images/about-second-image.png';
import aboutThirdImage from '/assets/images/about-third-image.png';
import aboutFouthImage from '/assets/images/about-fouth-image.png';
import aboutUsThu from "/assets/images/about-us-thu.png";
import banner from "/assets/images/about-banner.png";
import AboutTop from "../Components/About/AboutTop";
import HowItsWork from "../Components/Common/HowItsWork";

const About = () => {

    const AboutTopSec = {
        title: 'About PantriApp',
        description: "We believe in bringing the comfort, convenience, and personal touch of at-home service to busy lives, whether you’re a professional, a family, or a homeowner looking to simplify your day-today living. With PantriApp, you’ll connect with trusted and vetted providers who come into your home, use your ingredients, and leave you with something better: time, space, and peace of mind."
    }

    const AboutTopSecTwo = {
        title: 'Getting started with PantriApp',
        description: "Jumping in is simple: choose the service you need, select a vetted professional in your area, and book your session. You’ll receive confirmation, service details, and provider profiles — and you’re just a few steps away from turning your home into your haven."
    }

    const content = {
        title: 'Cart-to-Table™ Pilot Program',
        ThirdImage: aboutFouthImage,
        FristImage: ImageTwentyFive,
        secondImage: aboutThirdImage,

    }

    const about = {
        title: "A platform you can trust",
        Content: "Our home is your domain; we treat it with the utmost respect. That’s why PantriApp verifies every provider’s identity and credentials, supports secure payments, and offers transparent reviews so you can book confidently. We provide dedicated support to ensure your service runs smoothly, and our team is always available if any challenge arises.",
        leftImage: null,
        RightImage: aboutUsThu
    }

    const aboutTwo = {
        title: "Personalized services, in your home",
        Content: "From three-day meal-prep sessions using your own pantry and fresh ingredients to weekly laundry pickup & delivery, household organizing, and in-home dining experiences, PantriApp covers the full spectrum of premium home-based services. Whether you’re preparing for a busy week, entertaining guests, or reclaiming your space, our platform gives you flexible, high-quality access to the help you deserve.",
        leftImage: aboutUsThu,
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