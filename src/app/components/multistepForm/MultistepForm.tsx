import React, { useState } from 'react'
import StepOne from '../stepOne/StepOne'
import StepTwo from '../stepTwo/StepTwo'

export default function MultistepForm() {
	interface FormData {
		firstName: string
		lastName: string
		email: string
		confirmEmail: string
		password: string
		confirmPassword: string
		isDisabled: boolean
	}

	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
		isDisabled: true,
	})

	const [currentStep, setCurrentStep] = useState(1)

	const nextStep = () => setCurrentStep((next) => next + 1)
	const previousStep = () => setCurrentStep((prev) => prev - 1)

	return (
		<>
			<StepOne {...formData} />
		</>
	)
}
