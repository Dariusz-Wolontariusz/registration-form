'use client'

import React, { useState } from 'react'
import StepOne from '../stepOne/StepOne'
import StepTwo from '../stepTwo/StepTwo'
import StepThree from '../stepThree/StepThree'
import FormData from '@/app/types/formData'
import useMultiStepForm from "@/app/customHooks/import React from 'react'"

export default function MultistepForm() {
	const steps = [StepOne, StepTwo, StepThree]

	const {
		currentStep,
		nextStep,
		previousStep,
		updateFormData,
		isNextDisabled,
		isPrevDisabled,
		formData,
	} = useMultiStepForm(
		{
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			street: '',
			streetNumber: 0,
			city: '',
			postalCode: '0000',
			country: '',
		},
		steps
	)

	const CurrentStepComponent = steps[currentStep]

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
				handleSubmit={handleSubmit}
				onNext={nextStep}
				onPrev={previousStep}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</>
	)
}
