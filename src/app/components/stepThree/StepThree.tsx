'use client'
import './StepThree.css'
import InputComponent from '../inputComponent/InputComponent'
import Button from '../button/button'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'

interface StepTwoProps {
	onNext: () => void
	onPrev: () => void
}

export default function StepThree({ onNext, onPrev }: StepTwoProps) {
	const [payment, setPayment] = useState('')

	return (
		<Form className='form'>
			<h2>Payment method</h2>
			<InputComponent
				id='payment'
				fieldName='payment'
				placeholder='Payment'
				label='payment'
				type='text'
				value={payment}
				onChange={(e) => setPayment(e.target.value)}
				required
				validation={['required', 'minLength']}
			/>
			<Button onClick={onPrev} className='form__submit-btn' type='button'>
				Prev
			</Button>
		</Form>
	)
}
