'use client'
import './StepTwo.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'

interface StepTwoProps {
	onNext: () => void
	onPrev: () => void
}

function StepTwo({ onNext, onPrev }: StepTwoProps) {
	const [address, setAddress] = useState('')

	return (
		<Form className='form'>
			<h2>User Details</h2>
			<InputComponent
				id='address'
				fieldName='address'
				placeholder='Address'
				label='Address'
				type='text'
				value={address}
				onChange={(e) => setAddress(e.target.value)}
				required
				validation={['required', 'minLength']}
			/>
			<button onClick={onPrev} className='form__submit-btn'>
				Prev
			</button>
		</Form>
	)
}

export default StepTwo
