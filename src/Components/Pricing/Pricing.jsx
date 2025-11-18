import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";


const Pricing = () => {

    const SectionDesc = {
        Content: 'paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.'
    }

    return (
        <div className="pricing-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="Start your plan"
                                Title="PANTRIAPP PILOT PLANS"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title text-left">
                            <p className="section-descr">Basic, Economy, or Executive - each plan unlocks Cart-to-Table™ and chef services at your pace.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* BASIC PLAN */}
                    <div className="col-xl-4 col-lg-3 col-md-6">
                        <PricingCard
                            Price="$9.99/mo"
                            PricePlan="Basic Plan"
                            BtnUrl="/"
                            BtnText="Get started"
                            FeatureList={[
                                "AI Assistant",
                                "Cart-to-Table™",
                                "Search, upload, or save recipes",
                                "Grocery Shopping + Delivery",
                                "Meal Plans up to 2-weeks",
                                "Personal Chef booking",
                                "Access to all services (All taxes, cost & fees, excluded)"
                            ]}
                        />
                    </div>

                    {/* ECONOMY PLAN */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$49/yr"
                            PricePlan="Economy Plan"
                            BtnUrl="/"
                            BtnText="Get started"
                            FeatureList={[
                                "Reduced fees and credits",
                                "AI Assistant",
                                "Cart-to-Table™",
                                "Search, upload, or save recipes",
                                "Grocery Shopping + Delivery",
                                "Meal Plans up to 2-weeks",
                                "Personal Chef booking",
                                "Access to all services (All taxes, cost & fees, excluded)"
                            ]}
                        />
                    </div>

                    {/* EXECUTIVE PLAN */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$99/yr"
                            PricePlan="Executive Plan"
                            BtnUrl="/"
                            BtnText="Get started"
                            FeatureList={[
                                "Limited fees (All taxes excluded)",
                                "All premium services included",
                                "All Cart-to-Table features included",
                                "Priority booking",
                                "AI Assistant",
                                "Access to all services - minus fees"
                            ]}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;