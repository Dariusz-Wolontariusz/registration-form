'use client'
import './StepOne.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form } from '@radix-ui/react-form'
import ButtonPanel from '../buttonPanel/ButtonPanel'
import FormData from '@/app/lib/types'

interface StepOneProps {
	onNext: () => void
	onPrev: () => void
	isPrevDisabled: boolean
	isNextDisabled: boolean
	formData: FormData
	updateFormData: (newData: Partial<FormData>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function StepOne({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
	formData,
	updateFormData,
	handleSubmit,
}: StepOneProps) {
	const [confirmEmail, setConfirmEmail] = useState('')

	const [confirmPassword, setConfirmPassword] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFormData({ [e.target.name]: e.target.value })
	}

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<h2>User Registration</h2>
			<InputComponent
				id='firstName'
				fieldName='firstName'
				placeholder='First Name'
				label='First Name'
				type='text'
				value={formData.firstName}
				onChange={handleChange}
				required
				validation={['required', 'minLength']}
			/>
			<InputComponent
				id='lastName'
				fieldName='lastName'
				placeholder='Last Name'
				label='Last Name'
				type='text'
				value={formData.lastName}
				onChange={handleChange}
				required
				validation={['required', 'minLength']}
			/>
			<InputComponent
				id='email'
				fieldName='email'
				placeholder='Email Address'
				label='Email Address'
				type='email'
				value={formData.email}
				onChange={handleChange}
				required
				validation={['required', 'email']}
			/>
			<InputComponent
				id='confirmEmail'
				fieldName='confirmEmail'
				placeholder='Confirm Email Address'
				label='Confirm Email Address'
				type='email'
				value={confirmEmail}
				onChange={(e) => setConfirmEmail(e.target.value)}
				required
				validation={['required', 'email', 'confirmField']}
				compareValue={formData.email}
			/>
			<InputComponent
				id='password'
				fieldName='password'
				label='Password'
				type='password'
				value={formData.password}
				placeholder='Password'
				required
				onChange={handleChange}
				validation={['required', 'password']}
			/>
			<InputComponent
				id='confirmPassword'
				fieldName='confirmPassword'
				label='Confirm Password'
				placeholder='Confirm Password'
				type='password'
				value={confirmPassword}
				required
				onChange={(e) => setConfirmPassword(e.target.value)}
				validation={['required', 'confirmField']}
				compareValue={formData.password}
			/>
			<ButtonPanel
				onNext={onNext}
				onPrev={onPrev}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</Form>
	)
}
