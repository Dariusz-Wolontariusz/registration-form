'use client'
import './StepThree.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form } from '@radix-ui/react-form'
import ButtonPanel from '../buttonPanel/ButtonPanel'
import { StepComponentType } from '@/app/lib/types'

const StepThree: StepComponentType = ({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
}) => {
	const [payment, setPayment] = useState('')

	return (
		<Form className='form'>
			<h2>Payment method</h2>
			<InputComponent
				id='payment'
				fieldName='payment'
				placeholder='Payment'
				label='Fill in a payment method'
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

export default StepThree
