import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import ProcessCard from "./ProcessCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Process = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div className="project-area style-three" data-background="/assets/images/home-two/project-bg3.png">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="SMART LIVING & SIMPLIFIED"
                                Title="Cart-to-Table"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title text-left">
                            <p className="section-des">paradigms monotonectally extend open-source creative design
                                Cart-to-Table brings together AI, data, and real-world service to create a seamless household experience. Every feature is designed to save time, reduce stress, and deliver freedom at home.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row project-bs">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="project-single-box box-1">
                            <ProcessCard
                                Img="/assets/images/home-two/project-icon.png"
                                Title="Meal Plans"
                                Content="Search Recipes Upload Recipes Plan Meals."
                            ></ProcessCard>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="project-single-box box-2">
                            <ProcessCard
                                Img="/assets/images/home-two/project-icon2.png"
                                Title="Automated Grocery List"
                                Content="Turn recipe ingredients into one seamless grocery list."
                            ></ProcessCard>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="project-single-box box-3">
                            <ProcessCard
                                Img="/assets/images/home-two/project-icon3.png"
                                Title="Grocery Delivery"
                                Content="Get grocery deliveries for missing ingredients."
                            ></ProcessCard>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="project-single-box down box-4">
                            <ProcessCard
                                Img="/assets/images/home-two/project-icon4.png"
                                Title="Cooking at Home"
                                Content="Cook yourself or book a chef and enjoy a personal chef cooking using your recipes and groceries."
                            ></ProcessCard>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="project-single-box down box-4">
                            <ProcessCard
                                Img="/assets/images/home-two/project-icon4.png"
                                Title="Book a Chef"
                                Content="Enjoy a personal chef cooking using your recipes and groceries."
                            ></ProcessCard>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="project-bg-shape1 moveLeftBounce">
                <img src="/assets/images/home-two/project-rs.png" alt="shpae" />
            </div>
            <div className="project-bg-shape2 bounce-animate3">
                <img src="/assets/images/home-two/project-ws.png" alt="shpae" />
            </div> */}
        </div>
    );
};

export default Process;