'use client'

import React, { useState } from 'react'
import StepOne from '../stepOne/StepOne'
import StepTwo from '../stepTwo/StepTwo'

export default function MultistepForm() {
	const steps = [StepOne, StepTwo]

	const [currentStep, setCurrentStep] = useState(0)

	const CurrentStepComponent = steps[currentStep]

	const nextStep = () => setCurrentStep((next) => next + 1)
	const previousStep = () => setCurrentStep((prev) => prev - 1)

	return (
		<>
			<CurrentStepComponent onNext={nextStep} />
		</>
	)
}
