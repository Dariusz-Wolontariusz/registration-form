'use client'
import './StepOne.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'
// import Link from 'next/link'

interface StepOneProps {
	onNext: () => void
	onPrev: () => void
}

export default function StepOne({ onNext, onPrev }: StepOneProps) {
	//don't use types in here because TS infer them from the initial value
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		localStorage.setItem(
			'userData',
			JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			})
		)
		console.log({ firstName, lastName, email, password })
		setFirstName('')
		setLastName('')
		setEmail('')
		setConfirmEmail('')
		setPassword('')
		setConfirmPassword('')
		setIsDisabled(true)
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
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				required
				validation={['required', 'minLength']}
			/>
			<InputComponent
				id='lastName'
				fieldName='lastName'
				placeholder='Last Name'
				label='Last Name'
				type='text'
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				required
				validation={['required', 'minLength']}
			/>
			<InputComponent
				id='email'
				fieldName='email'
				placeholder='Email Address'
				label='Email Address'
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
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
				compareValue={email}
			/>

			<InputComponent
				id='password'
				fieldName='password'
				label='Password'
				type='password'
				value={password}
				placeholder='Password'
				required
				onChange={(e) => setPassword(e.target.value)}
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
				compareValue={password}
			/>
			<FormSubmit asChild>
				<button
					id='my-submit'
					className='form__submit-btn'
					type='submit'
					disabled={isDisabled}
				>
					Submit
				</button>
			</FormSubmit>
			<button onClick={onNext} className='form__submit-btn'>
				Next
			</button>
		</Form>
	)
}
