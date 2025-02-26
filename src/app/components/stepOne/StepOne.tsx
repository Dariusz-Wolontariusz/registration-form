'use client'
import './StepOne.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form } from '@radix-ui/react-form'
import ButtonPanel from '../buttonPanel/ButtonPanel'
import { StepComponentType } from '@/app/lib/types'

const StepOne: StepComponentType = ({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
	formData,
	updateFormData,
	handleSubmit,
}) => {
	const [confirmEmail, setConfirmEmail] = useState('')

	const [confirmPassword, setConfirmPassword] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFormData({ [e.target.name]: e.target.value })
	}

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<h1>User Registration</h1>
			<InputComponent
				id='firstName'
				fieldName='firstName'
				placeholder='First Name'
				label='Fill in your first name'
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
				label='Fill in your last name'
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
				label='Fill in your email address'
				type='email'
				value={formData.email}
				onChange={handleChange}
				required
				validation={['required', 'email']}
			/>
			<InputComponent
				id='confirmEmail'
				fieldName='confirmEmail'
				placeholder='Confirm your email'
				label='Confirm your email address'
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
				label='Type a new password'
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
				label='Confirm a new password'
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

export default StepOne
