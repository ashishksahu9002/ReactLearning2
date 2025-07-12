import React, { useState } from 'react'


const Step1 = ({ next }) => (
    <div>
        <h3>Step 1</h3>
        <button onClick={next} >Next</button>
    </div>
)
const Step2 = ({ prev, next }) => (
    <div>
        <button onClick={prev} >Prev</button>
        <h3>Step 2</h3>
        <button onClick={next} >Next</button>
    </div>
)
const Step3 = ({ prev }) => (
    <div>
        <button onClick={prev} >Prev</button>
        <h3>Step 3</h3>
        <button type="submit">Submit</button>
    </div>
)

function MultiStepForm() {
    const [stepNo, setStepNo] = useState(1)
    const nextStep = () => setStepNo(stepNo + 1)
    const prevStep = () => setStepNo(stepNo - 1)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    return (
        <>
            <h1>MultiStepForm</h1>
            <form onSubmit={handleSubmit}>
                {stepNo === 1 && <Step1 next={nextStep} />}
                {stepNo === 2 && <Step2 prev={prevStep} next={nextStep} />}
                {stepNo === 3 && <Step3 prev={prevStep} />
                }
            </form>
        </>
    )
}

export default MultiStepForm