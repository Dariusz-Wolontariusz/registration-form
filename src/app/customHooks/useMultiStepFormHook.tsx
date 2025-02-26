import React, { useState } from 'react'
import { FormData, StepComponentType } from '@/app/lib/types'

export default function useMultiStepForm(
	initialData: FormData,
	steps: StepComponentType[]
) {
	const [currentStep, setCurrentStep] = useState<number>(0)
	const [formData, setFormData] = React.useState<FormData>(initialData)

	const nextStep = () => setCurrentStep((next) => next + 1)

	const previousStep = () => setCurrentStep((prev) => prev - 1)

	const updateFormData = (newData: Partial<FormData>) => {
		setFormData((prevData) => ({ ...prevData, ...newData }))
	}

	return {
		currentStep,
		formData,
		nextStep,
		previousStep,
		updateFormData,
		isPrevDisabled: currentStep === 0,
		isNextDisabled: currentStep === steps.length - 1,
	}
}
