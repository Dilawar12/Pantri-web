import AppTabs from "../Components/AppTabs/AppTabs";
import BreadCumb from "../Components/Common/BreadCumb";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import SectionTitle from "../Components/Common/SectionTitle";
import Faq from "../Components/Faq/Faq";
import Process from "../Components/Process/Process";
import PersonalChefs from "../Components/ServiceDetail/PersonalChef";
import ImageTwentyFive from '../assets/images/inner/service-details.png';
const banner = '../../assets/images/laundry-banner.png';
const sectionOne = '../../assets/images/laundry-sec-1.png';
const sectionTwo = '../../assets/images/laundry-sec-2.png';

const LaunderyPickup = () => {
  const content = {
    title: 'Simplified for Modern Living',
    description: "Laundry shouldn’t slow you down. With our pickup and delivery service, your clothes are collected, cleaned,and returned fresh — without you lifting a finger.",
    secondDesciption: 'Whether it’s your weekly wash, linens, or dry cleaning, our trusted local partners ensure every item is handled with care and returned on your schedule.',
    btn_url: "/pricing",
    btn_name: "Get Started",
    leftImage: null,
    rightImage: sectionOne,
    direction: "flex-lg-row flex-column-reverse"
  }

  const contentTwo = {
    title: 'Powered by PantriOS',
    description: "Our intelligent system learns your laundry habits and preferences — from pickup times to detergent choices — and automates your future bookings. Soon, you’ll be able to track orders, view past services, and even earn loyalty perks for recurring pickups.",
    btn_url: "/pricing",
    btn_name: "Get Started",
    leftImage: sectionTwo,
    rightImage: null,
    direction: "flex-lg-row flex-column-reverse"
  }


  const whoIsWorkingContent = [{
    title: 'Doorstep Conveniences',
    desc: "Schedule pickup and delivery right from your app."
  },
  {
    title: 'Real-Time Tracking',
    desc: "Know exactly when your laundry is picked up, cleaned and delivered"
  },
  {
    title: 'Flexible Plans',
    desc: "Choose one-time service or recurring pickups that fit your lifestyle"
  },
  {
    title: 'Premium Care',
    desc: "Our vetted partners use eco-friendly detergents and professional-grade equipment."
  },
  {
    title: 'Freedom First',
    desc: "Spend less time on chores and more time doing what matters."
  },
  ]
  return (
    <div className="service-detail">
      <BreadCumbAbout image={banner} />


      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <SectionTitle
              SubTitle="Up Comming Experience"
              Title="Freedom from Laundry Is Just Around the Corner."
            ></SectionTitle>
          </div>
        </div>
      </div>
      <PersonalChefs content={content} />
      <PersonalChefs content={contentTwo} />
      <AppTabs data={whoIsWorkingContent} title="Why You’ll Love It" content="Smarter move, fewer steps — all powered by AI PantriOS." />
    </div>
  );
};

export default LaunderyPickup;