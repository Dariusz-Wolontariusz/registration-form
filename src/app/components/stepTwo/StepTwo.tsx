'use client'
import './StepTwo.css'
import InputComponent from '../inputComponent/InputComponent'
import React, { useState } from 'react'
import { Form, FormSubmit } from '@radix-ui/react-form'

function StepTwo() {
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
		</Form>
	)
}

export default StepTwo
