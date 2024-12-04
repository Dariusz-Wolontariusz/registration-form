'use client'
import './StepOne.css'
// import PasswordInput from '../password/PasswordInput'
import InputSection from '../inputSection/InputSection'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'

export default function StepOne() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

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
	}

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<h2>User Registration</h2>
			<InputSection
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
			<InputSection
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
			<InputSection
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

			<InputSection
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

			<InputSection
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

			<InputSection
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
				<button id='my-submit' className='form__submit-btn'>
					Submit
				</button>
			</FormSubmit>
		</Form>
	)
}
