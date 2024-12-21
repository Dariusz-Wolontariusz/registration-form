'use client'

import React, { useState } from 'react'
import StepOne from '../stepOne/StepOne'
import StepTwo from '../stepTwo/StepTwo'
import StepThree from '../stepThree/StepThree'
import ButtonPanel from '../buttonPanel/ButtonPanel'
import { log } from 'node:console'

interface FormData {
	firstName: string
	lastName: string
	email: string
	password: string
}

export default function MultistepForm() {
	const steps = [StepOne, StepTwo, StepThree]

	const [currentStep, setCurrentStep] = useState(0)
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})

	const CurrentStepComponent = steps[currentStep]

	const nextStep = () => setCurrentStep((next) => next + 1)
	const previousStep = () => setCurrentStep((prev) => prev - 1)

	const isPrevDisabled = currentStep === 0
	const isNextDisabled = currentStep === steps.length - 1

	const updateFormData = (newData: Partial<FormData>) => {
		setFormData((prevData) => ({ ...prevData, ...newData }))
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (currentStep === steps.length - 1) {
			localStorage.setItem('userData', JSON.stringify(formData))
			console.log('Form submitted', formData)
		} else {
			nextStep()
		}
	}

	return (
		<>
			<CurrentStepComponent
				formData={formData}
				updateFormData={updateFormData}
				onNext={nextStep}
				onPrev={previousStep}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</>
	)
}
