'use client'
import './StepTwo.css'
import InputComponent from '../inputComponent/InputComponent'
import ButtonPanel from '../buttonPanel/ButtonPanel'
import React from 'react'
import { Form } from '@radix-ui/react-form'
import { StepComponentType } from '@/app/lib/types'
import { DatePicker } from '../datePicker/DatePicker'

const StepTwo: StepComponentType = ({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
	updateFormData,
	formData,
	handleSubmit,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFormData({ [e.target.name]: e.target.value })
	}

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<h2>User Details</h2>
			<InputComponent
				id='street'
				fieldName='street'
				placeholder='Street'
				label='Fill in your street'
				type='text'
				value={formData.street}
				onChange={handleChange}
				required
				validation={['required', 'minLength']}
			/>
			<InputComponent
				id='streetNumber'
				fieldName='streetNumber'
				placeholder='Street Number'
				label='Fill in your street number'
				type='text'
				value={formData.streetNumber}
				onChange={handleChange}
				required
				validation={['required']}
			/>
			<InputComponent
				id='postalCode'
				fieldName='postalCode'
				placeholder='Post Code'
				label='Fill in your post code'
				type='text'
				value={formData.postalCode}
				onChange={handleChange}
				required
				validation={['required', 'exactLength']}
			/>
			<InputComponent
				id='city'
				fieldName='city'
				placeholder='City'
				label='Fill in your City'
				type='text'
				value={formData.city}
				onChange={handleChange}
				required
				validation={['required']}
			/>
			<DatePicker />

			<ButtonPanel
				onNext={onNext}
				onPrev={onPrev}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</Form>
	)
}

export default StepTwo
