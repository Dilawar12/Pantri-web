import AppTabs from "../Components/AppTabs/AppTabs";
import BreadCumb from "../Components/Common/BreadCumb";
import Faq from "../Components/Faq/Faq";

const FaqPage = () => {
  const sectionOne = [
    {
      title: "How does the chef service work?",
      desc: "Browse thousands of recipes or upload your own. AI PantriOS automatically scans for dietary needs and allergy risks through your household survey.",
    },
    {
      title: "Auto Shop With Smart Grocery Sync",
      desc: "Once you select a recipe, PantriApp instantly builds your grocery list and connects it to Instacart for one-click shopping or delivery — your choice.",
    },
    {
      title: "Match & Cook Your Way",
      desc: "AI PantriOS matches you with the perfect chef for your meal — or lets you cook it yourself with guided steps. Either way, your ingredients turn into meals made for your household.",
    },
  ];

  // SECTION 2: Pricing & Payments
  const sectionTwo = [
    {
      title: "How much does it cost to use Cart-to-Table™?",
      desc: "You can start with a Basic Pay-As-You-Go plan or any other plan that meets your needs. A Pay-As-You-Go Digital Pass ($9.99/mo) includes unlimited recipes, grocery list automation, and Instacart + fees handoff. The Pilot Economy Plan ($49/year) gives unlimited yearly access. The Executive Plan ($99/year) includes everything in Economy plus chef access in Houston.",
    },
    {
      title: "What’s the difference between a subscription and pay-as-you-go?",
      desc: "Pay-as-you-go is month-to-month, while a subscription gives you full Cart-to-Table™ access all year with lower platform fees.",
    },
    {
      title: "Are grocery delivery fees included in my PantriApp subscription?",
      desc: "No. Delivery fees, service fees, grocery costs, and tips are paid separately to Instacart at checkout. PantriApp may authorize credit for delivery and service fees for its customers.",
    },
  ];

  // SECTION 3: Chef Services (Houston Only)
  const sectionThree = [
    {
      title: "How does the chef service work?",
      desc: "After creating your meal plan, you can book a PantriApp chef to come to your home. The chef uses your groceries to prepare fresh and personalized meals.",
    },
    {
      title: "How much does a chef session cost?",
      desc: "Standard chef sessions start at $125, depending on the menu and duration.",
    },
    {
      title: "Are the chefs vetted?",
      desc: "Yes. All PantriApp chefs are background-checked, certified (including food safety), and reviewed by customers.",
    },
  ];

  // SECTION 4: Grocery Orders & Delivery
  const sectionFour = [
    {
      title: "Do I pay PantriApp for groceries?",
      desc: "No. You pay Instacart directly for groceries, delivery, service fees, and tips.",
    },
    {
      title: "How does the Instacart integration work?",
      desc: "After finalizing your meal plan, your grocery list auto-populates. With one tap, you send the list to Instacart for delivery or pickup and complete checkout there.",
    },
    {
      title: "What if my delivery is late or items are missing?",
      desc: "For grocery issues, contact Instacart directly. For additional support, contact us at info@pantri-app.com or call (832) 614-0169.",
    },
  ];

  // SECTION 5: Account & Security
  const sectionFive = [
    {
      title: "Is Laundry Pickup Available now?",
      desc: "No. Laundry services will be available during our launch in 2026.",
    },
    {
      title: "Is Home Organizing Available now?",
      desc: "No. Home organizing services will be available during our launch in 2026.",
    },
    {
      title: "Is my personal information safe?",
      desc: "Yes. We use secure encryption and follow strict data protection standards. Your payment information is processed securely through trusted partners.",
    },
    {
      title: "Can I cancel my subscription?",
      desc: "Yes. You can cancel anytime. Your subscription will remain active until the end of the monthly or annual billing period.",
    },
    {
      title: "Will my pricing increase later?",
      desc: "Early Access subscribers keep their pricing for the year.",
    },
  ];
  const sectionSeven = [
    {
      title: "When will chef services come to my city?",
      desc: "We’re launching chef services in Houston, Texas in 2026 during our Pilot. New cities will be announced as we expand. Join the waitlist on our website to be notified when we launch in your area.",
    },
    {
      title: "Can chefs bring ingredients to my home?",
      desc: "PantriApp doesn’t sell groceries. We power your dining experience with AI tools, personalized planning, and optional chef services — while our partners help deliver freedom at home.",
    },
  ];

  return (
    <div className="faq-page">
      <Faq />

      <AppTabs
        data={sectionOne}
        title="Chef Services (Houston Only)"
        content="All powered by AI PantriOS."
      />

      <AppTabs
        data={sectionTwo}
        title="Pricing & Payments"
        content="Everything you need to know about our plans."
      />

      <AppTabs
        data={sectionThree}
        title="Chef Services (Houston Only)"
        content="Professional chefs, personalized meals."
      />

      <AppTabs
        data={sectionFour}
        title="Grocery Orders & Delivery"
        content="Instacart-powered shopping & delivery."
      />

      <AppTabs
        data={sectionFive}
        title="Account & Security"
        content="Information about upcoming features and services."
      />
      <AppTabs
        data={sectionSeven}
        title="Future & Expansion"
        content="Learn about upcoming cities, features, and growth plans."
      />
    </div>
  );
};

export default FaqPage;
