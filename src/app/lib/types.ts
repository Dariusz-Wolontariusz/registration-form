export interface FormData {
	firstName: string
	lastName: string
	email: string
	password: string
	street: string
	streetNumber: string
	city: string
	postalCode: string
	country: string
}

export interface StepProps {
	onNext: () => void
	onPrev: () => void
	isPrevDisabled: boolean
	isNextDisabled: boolean
	formData: FormData
	updateFormData: (newData: Partial<FormData>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export type StepComponentType = React.FC<StepProps>
