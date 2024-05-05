import { useState } from "react";
import LoginStep1 from "./step1";
import LoginStep2 from "./step2";
import LoginStep3 from "./step3";
import LoginStep4 from "./step4";
import LoginStep5 from "./step5";
import LoginStep6 from "./step6";

const LoginPage = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="container mx-auto md:p-6">
            <div className="bg-white p-2 md:p-6">
                <div className="form-container">
                    {currentStep === 0 && <LoginStep1 onNext={handleNext}
                    />}
                    {currentStep === 1 && <LoginStep2 onNext={handleNext} onPrev={handlePrev}
                    />}
                    {currentStep === 2 && <LoginStep3 onNext={handleNext} onPrev={handlePrev}
                    />}
                    {currentStep === 3 && <LoginStep4 onNext={handleNext} onPrev={handlePrev}
                    />}
                    {currentStep === 4 && <LoginStep5 onNext={handleNext} onPrev={handlePrev}
                    />}
                    {currentStep === 5 && <LoginStep6 onNext={handleNext} onPrev={handlePrev}
                    />}
                    {/* {currentStep === 1 && <LoginStep2 onPrev={handlePrev} show={show} setShow={setShow} errorss={errorss}
                        loading={loading} handleLogin={handleLogin} user={user} setPassword={setPassword}
                    />}
                    {
                        currentStep === 2 && <LoginStep3 user={user} onPrev={handlePrev} />
                    } */}

                </div>
            </div>
        </div>
    );
};

export default LoginPage;