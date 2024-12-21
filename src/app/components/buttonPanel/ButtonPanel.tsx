import React from 'react'
import Button from '../button/button'
import { FormSubmit } from '@radix-ui/react-form'

interface ButtonPanelProps {
	onNext: () => void
	onPrev: () => void
	isPrevDisabled: boolean
	isNextDisabled: boolean
}

export default function ({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
}: ButtonPanelProps) {
	return (
		<>
			<FormSubmit asChild>
				<Button
					id='my-submit'
					className='form__submit-btn'
					type='submit'
					buttonText='Submit'
				/>
			</FormSubmit>
			<Button
				className='form__submit-btn'
				type='button'
				onClick={onPrev}
				disabled={isPrevDisabled}
				buttonText='Previous'
			/>

			<Button
				className='form__submit-btn'
				onClick={onNext}
				disabled={isNextDisabled}
				type='button'
				buttonText='Next'
			/>
		</>
	)
}
