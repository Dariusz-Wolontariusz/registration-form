import React, { useState } from 'react'
import FormData from '@/app/types/formData'

export default function useMultiStepForm(
	initialData: FormData,
	steps: React.ComponentType<any>[]
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
