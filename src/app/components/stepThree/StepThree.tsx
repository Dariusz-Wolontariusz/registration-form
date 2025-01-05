'use client'
import './StepThree.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'
import ButtonPanel from '../buttonPanel/ButtonPanel'

interface StepTwoProps {
	onNext: () => void
	onPrev: () => void
	isPrevDisabled: boolean
	isNextDisabled: boolean
}

export default function StepThree({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
}: StepTwoProps) {
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
			<ButtonPanel
				onNext={onNext}
				onPrev={onPrev}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</Form>
	)
}
