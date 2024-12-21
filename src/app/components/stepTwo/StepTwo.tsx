'use client'
import './StepTwo.css'
import InputComponent from '../inputComponent/InputComponent'
import Button from '../button/button'
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
			<Button onClick={onPrev} className='form__submit-btn' type='button'>
				Prev
			</Button>
			<Button onClick={onNext} className='form__submit-btn' type='button'>
				Next
			</Button>
		</Form>
	)
}

export default StepTwo
