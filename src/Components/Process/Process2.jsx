import SectionTitle from "../Common/SectionTitle";
import ProcessCard2 from "./ProcessCard2";
import { useModal } from "../Modal/ModalContext.jsx";

const Process2 = () => {

    const { openModal } = useModal();

    return (
        <div className="working-proces-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="Join Us"
                                Title="How It Works"
                            ></SectionTitle>
                            {/* <h3 className="section-title-sub">Deposit Chores. <span>Withdraw Freedom.</span></h3> */}
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
                        <div className="working-process-box after-transprent process-second">
                            <ProcessCard2
                                Image="/assets/images/home-3/process-2.png"
                                Number="02"
                                Title="Create a Better Quality of Life"
                                Content="You choose what matters most - we’ll take care of the rest. From chefs to laundry to organizing, we automate your household with care."
                            ></ProcessCard2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="working-process-box before-transprent">
                            <ProcessCard2
                                Image="/assets/images/home-3/process-3.png"
                                Number="03"
                                Title="Your Everyday Freedom"
                                Content="We connects trusted providers with AI-powered scheduling and personalization - all in one app."
                            ></ProcessCard2>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="solutek-btn mt-10 d-flex justify-content-center">
                            <a href="" onClick={(e) => {e.preventDefault(); openModal();}} >
                                Become an Early Customer to Sign Up
                                <div className="solutek-hover-btn hover-bx"></div>
                                <div className="solutek-hover-btn hover-bx2"></div>
                                <div className="solutek-hover-btn hover-bx3"></div>
                                <div className="solutek-hover-btn hover-bx4"></div>
                            </a>
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