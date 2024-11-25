'use client'
import './StepTwo.css'
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
		<Form className='form__root' onSubmit={handleSubmit}>
			<h2>User Registration</h2>
			<FormField className='form__field' name='firstName'>
				<FormLabel className='form__label'>First Name</FormLabel>
				<FormControl asChild>
					<input
						type='text'
						className='form__input'
						placeholder='First Name'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</FormControl>
				<FormMessage className='form__message' match='valueMissing'>
					* Please enter your first name
				</FormMessage>
			</FormField>
			<FormField className='form__field' name='lastName'>
				<FormLabel className='form__label'>Last Name</FormLabel>
				<FormControl asChild>
					<input
						type='text'
						className='form__input'
						placeholder='Last Name'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</FormControl>
				<FormMessage className='form__message' match='valueMissing'>
					* Please enter your last name
				</FormMessage>
			</FormField>
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
				<FormControl asChild>
					<input
						type='password'
						className='form__input'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<></>
				</FormControl>
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
						type='password'
						className='form__input'
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
			<FormField className='form__field' name='submit'>
				<FormSubmit asChild>
					<button className='form__submit-btn' type='submit'>
						Submit
					</button>
				</FormSubmit>
			</FormField>
		</Form>
	)
}
