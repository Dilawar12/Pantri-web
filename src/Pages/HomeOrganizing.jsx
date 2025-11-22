import AboutTop from "../Components/About/AboutTop";
import AppTabs from "../Components/AppTabs/AppTabs";
import BreadCumb from "../Components/Common/BreadCumb";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import SectionTitle from "../Components/Common/SectionTitle";
import PersonalChefs from "../Components/ServiceDetail/PersonalChef";
const sectiionOne = '../../assets/images/home-org-sec-1.png';
const homeorgsec2 = '../../assets/images/home-org-sec-2.png';
const homeBanner = '../../assets/images/home-org-banner-video.png';
const HomeOrganizing = () => {

  const content = {
    title: 'Simplify Your Space. Amplify Your Freedom',
    description: "Whether it’s your pantry, closet, office, or garage, every space in your home can run smarter. Our Home Organizing service helps you bring order, flow, and functionality back to your household.",
    btn_url: "/pricing",
    btn_name: "Get Started",
    leftImage: null,
    rightImage: sectiionOne,
    direction: "flex-lg-row flex-column-reverse"
  }

  const contentTwo = {
    title: 'Smarter Spaces, Designed Around You',
    description: "We use the same personalized approach that powers the Household OS — combining AI insights, practical design, and human expertise to create spaces that truly work for you.",
    btn_url: "/pricing",
    btn_name: "Get Started",
    leftImage: homeorgsec2,
    rightImage: null,
    direction: "flex-lg-row flex-column-reverse"
  }

  const whoIsWorkingContent = [{
    title: 'How It Works: Organizing Made Simple',
    desc: "You don’t need a thousand bins or hours of cleaning time.  With PantriApp, organizing happens in a few smart steps:"
  },
  {
    title: 'Assess Your Space',
    desc: "We identify your goals, clutter patterns, and daily habits."
  },
  {
    title: 'Simplify',
    desc: "Declutter with purpose, keeping only what supports your lifestyle."
  },
  {
    title: 'Plan & Place',
    desc: "Arrange, label, and design for easy maintenance."
  },
  {
    title: 'Optimize',
    desc: "Use smart suggestions from PantriOS to maintain flow and prevent re-clutter."
  },
  ]
  const AboutTopSec = {
    title: 'Why It Matters',
    description: "Organizing your home isn’t just about neatness; it’s about mental clarity, saved time, and freedom.  By managing your home like a system, you gain more energy for what truly matters."
  }


  return (
    <div className="service-detail">
      <BreadCumbAbout image={homeBanner} />
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <SectionTitle
              SubTitle="Everyday Life Simplified"
              Title="Redefine Freedom At Home"
            ></SectionTitle>
          </div>
        </div>
      </div>
      <PersonalChefs content={content} />
      <AboutTop AboutTopSec={AboutTopSec} />
      <AppTabs data={whoIsWorkingContent} title="Why You’ll Love It" content="Smarter move, fewer steps — all powered by AI PantriOS." />
      <PersonalChefs content={contentTwo} />
    </div>
  );
};

export default HomeOrganizing;