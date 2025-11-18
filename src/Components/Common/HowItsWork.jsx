import SectionTitle from "../Common/SectionTitle";
import ProcessCard2 from "../Process/ProcessCard2";

const HowItsWork = () => {
    return (
            <div className="working-proces-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                    SubTitle="work process"
                                    Title="How It Works"
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
                                    Title="You choose what you need."
                                    Content="Select Cart-to-Table, Laundry Pickup, or Organizing — all in one easy app."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box after-transprent">
                                <ProcessCard2
                                    Image="/assets/images/home-3/process-2.png"
                                    Number="02"
                                    Title="PantriOS personalizes your experience."
                                    Content="Our AI learns your routines, suggests services, and matches you with the best provider nearby."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box before-transprent">
                                <ProcessCard2
                                    Image="/assets/images/home-3/process-3.png"
                                    Number="03"
                                    Title="You book and relax."
                                    Content="Your trusted Pantri provider handles the work while you enjoy more time and less stress."
                                ></ProcessCard2>
                            </div>
                        </div>			
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="working-process-bottom">
                                <h3 className="text-center">PantriApp — powered by PantriOS.</h3>
                                <p>Your home, simplified by AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HowItsWork;