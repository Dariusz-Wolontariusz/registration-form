import React from 'react'
import styles from './StepTwo.module.css'
import {
	Form,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
	FormSubmit,
} from '@radix-ui/react-form'

export default function StepTwo() {
	return (
		<Form className='form__root'>
			<h1>User Registration</h1>
			<FormField className='form__field' name='firstName'>
				<div className='form__firstName-container'>
					<FormLabel htmlFor='firstName' className='form__label'>
						First Name
					</FormLabel>
					<FormMessage className='form__message' match='valueMissing'>
						Please enter your first name
					</FormMessage>
				</div>
				<FormControl asChild>
					<input type='text' className='form__input' placeholder='First Name' />
				</FormControl>
			</FormField>
			<FormField className='form__field' name='lastName'>
				<div className='form__lastName-container'>
					<FormLabel htmlFor='lastName' className='form__label'>
						Last Name
					</FormLabel>
					<FormMessage className='form__message' match='valueMissing'>
						Please enter your last name
					</FormMessage>
				</div>
				<FormControl asChild>
					<input type='text' className='form__input' placeholder='Last Name' />
				</FormControl>
			</FormField>
		</Form>
	)
}
