import SectionTitle from "../Common/SectionTitle";
import ProcessCard2 from "./ProcessCard2";

const Process2 = () => {
    return (
        <div className="working-proces-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="work process"
                                Title="How PantriApp Works"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="working-process-box before-transprent after-transprent">
                            <ProcessCard2
                                Image="/assets/images/home-3/process-1.png"
                                Number="01"
                                Title="Recognize and Reclaim"
                                Content="PantriApp helps you reclaim your time. No more sacrificing your evenings for chores."
                            ></ProcessCard2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="working-process-box after-transprent">
                            <ProcessCard2
                                Image="/assets/images/home-3/process-2.png"
                                Number="02"
                                Title="Create a Better Quality of Life"
                                Content="Choose what matters most - we’ll handle the rest. From chefs, laundry to organizing, PantriApp automates your household with care."
                            ></ProcessCard2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="working-process-box before-transprent">
                            <ProcessCard2
                                Image="/assets/images/home-3/process-3.png"
                                Number="03"
                                Title="PantriAPP for Your Everyday Freedom"
                                Content="PantriApp connects trusted providers with AI-powered scheduling and personalization - all in one app."
                            ></ProcessCard2>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="working-process-bottom">
                                <p>Deposit chores. Withdraw freedom.</p>
                            </div>
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

export default Process2;