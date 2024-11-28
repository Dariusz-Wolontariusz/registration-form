'use client'
import './StepTwo.css'
import PasswordInput from '../password/PasswordInput'
import InputSection from '../inputSection/InputSection'
import React, { useState } from 'react'
import {
	Form,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
	FormSubmit,
} from '@radix-ui/react-form'

export default function StepTwo() {
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

				// errorMessage='* Please enter your first name'
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
				errorMessage='* Please enter your last name'
			/>

			<FormField className='form__field' name='email'>
				<FormLabel className='form__label'>Email Address</FormLabel>
				<FormControl asChild>
					<input
						type='email'
						className='form__input'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</FormControl>
				<FormMessage className='form__message' match='valueMissing'>
					* Please enter your email address
				</FormMessage>
				<FormMessage className='form__message' match='typeMismatch'>
					* Please enter a valid email address
				</FormMessage>
			</FormField>
			<FormField className='form__field' name='confirmEmail'>
				<FormLabel className='form__label'>Confirm Email Address</FormLabel>
				<FormControl asChild>
					<input
						type='email'
						className='form__input'
						placeholder='Confirm Email Address'
						value={confirmEmail}
						onChange={(e) => setConfirmEmail(e.target.value)}
						required
					/>
				</FormControl>
				<FormMessage className='form__message' match='valueMissing'>
					* Please confirm your email address
				</FormMessage>
				<FormMessage
					className='form__message'
					match={(value) => value !== email}
				>
					* Entered email address doesn't match with the previous one
				</FormMessage>
			</FormField>
			<FormField className='form__field' name='password'>
				<FormLabel className='form__label'>Password</FormLabel>
				<div>
					<button tabIndex={100}>tfdfdfdfdfd</button>
					<FormControl asChild>
						<input
							id='password'
							placeholder='Setup a new password'
							className='form__input'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</FormControl>
				</div>

				<FormMessage className='form__message' match='valueMissing'>
					* Please enter a new password
				</FormMessage>
				<FormMessage
					className='form__message'
					match={(value) =>
						!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
							value
						)
					}
				>
					Password must be at least 8 characters long, contain 1 uppercase, 1
					digit and 1 special character
				</FormMessage>
			</FormField>
			<FormField className='form__field' name='confirmPassword'>
				<FormLabel className='form__label'>Confirm Password</FormLabel>
				<FormControl asChild>
					<input
						// id='password'
						type='password'
						className='form__input password__input'
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</FormControl>
				<FormMessage className='form__message' match='valueMissing'>
					* Please confirm a new password
				</FormMessage>
				<FormMessage
					className='form__message'
					match={(value) => value !== password}
				>
					Entered password doesn't match with the new one
				</FormMessage>
			</FormField>
			<div style={{ width: '100%' }}>
				<FormSubmit id='my-submit' className='form__submit-btn'>
					Submit
				</FormSubmit>
			</div>
		</Form>
	)
}
