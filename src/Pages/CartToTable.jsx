import AppTabs from "../Components/AppTabs/AppTabs";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import SectionTitle from "../Components/Common/SectionTitle";
import Process from "../Components/Process/Process";
import PersonalChefs from "../Components/ServiceDetail/PersonalChef";
const sectionOne = '../../assets/images/cart-to-table-section-1.png';
const sectionTwo = '../../assets/images/cart-to-table-section-2.png';
const sectionThree = '../../assets/images/cart-to-table-section-3.png';
const banner = '../../assets/images/cart-to-table-banner.png';



const CartToTable = () => {

  const content = {
    title: ' In-Home Cooking ',
    description: "Personalized cooking sessions in your own kitchen, tailored to your dietary needs and preferences. Our chefs handle everything from meal planning to cleanup, ensuring a stress-free culinary experience.",
    btn_url: "/recipe",
    btn_name: "Get Started",
    leftImage: null,
    rightImage: sectionOne,
    direction: "flex-lg-row flex-column-reverse",
    details: [
      "Personalized cooking sessions in your kitchen",
      "Prepared with your ingredients",
      " Basic meal customization (protein, starch, vegetables)",
      "Ideal for weeknight dinners or special occasions",
    ]
  }

  const contentTwo = {
    title: 'Meal Prep Assistance',
    description: "Support with ingredient preparation, chopping, seasoning, and setup for efficient meal prep. Perfect for dinner parties, family gatherings, or events, our chefs provide flexible scheduling and same-day availability based on your needs.",
    btn_url: "/recipe",
    btn_name: "Get Started",
    leftImage: sectionTwo,
    rightImage: null,
    direction: "flex-lg-row flex-column-reverse",
    details: [
      "Filter by cuisine or diet, choose your chef, and schedule prepsessions every 3 days, weekly, or monthly—using your own ingredients for fresh, balanced meals.",
      "Portioning and labeling of all meals",
      "Nutritionally balanced and customized to preferences",
    ]
  }

  const contentThree = {
    title: 'Food Prep Assistance',
    description: "Assistance with ingredient prep, chopping, seasoning, and setup. Support for dinner parties, family gatherings, or events. Great for bulk prep and storage solutions with flexible scheduling and same-day availability based on chef.",
    btn_url: "/pricing",
    btn_name: "Get Started",
    leftImage: null,
    rightImage: sectionThree,
    direction: "flex-lg-row flex-column-reverse",
    details: [
      "Assistance with ingredient prep, chopping, seasoning, and setup",
      "Support for dinner parties, family gatherings, or events",
      "Great for bulk prep and storage solutions",
      "Flexible scheduling and same-day availability (based on chef)",
    ]
  }

  const whoIsWorkingContent = [{
    title: 'Search & Upload Recipes',
    desc: "Browse thousands of recipes or upload your own. AI PantriOS automatically scans for dietary needs and allergy risks through your household survey."
  },
  {
    title: 'Auto Shop With Smart Grocery Sync',
    desc: "  Once you select a recipe, PantriApp instantly builds your grocery list and connects it to Instacart for one-click shopping or delivery — your choice."
  },
  {
    title: 'Match & Cook Your Way',
    desc: "AI PantriOS matches you with the perfect chef for your meal — or lets you cook it yourself with guided steps. Either way, your ingredients turn into meals made for your household."
  },
  ]

  return (
    <div className="service-detail">
      <BreadCumbAbout image={banner} />
      <Process />
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <SectionTitle
              SubTitle="OUR SERVICES"
              Title="Explore our Personal Chef services"
            ></SectionTitle>
          </div>
        </div>
      </div>
      <PersonalChefs content={content} />
      <PersonalChefs content={contentTwo} />
      <PersonalChefs content={contentThree} />
      <AppTabs data={whoIsWorkingContent} title="How Cart-to-Table Works" content='Smarter meals, fewer steps — all powered by AI PantriOS.' />
    </div>
  );
};

export default CartToTable;