import React from 'react'
import Button from '../button/button'
import { FormSubmit } from '@radix-ui/react-form'

interface ButtonPanelProps {
	onNext: () => void
	onPrev: () => void
	isPrevDisabled: boolean
	isNextDisabled: boolean
}

export default function ButtonPanel({
	onNext,
	onPrev,
	isPrevDisabled,
	isNextDisabled,
}: ButtonPanelProps) {
	return (
		<>
			{isNextDisabled ? (
				<FormSubmit asChild>
					<Button
						id='my-submit'
						className='form-submit__btn'
						type='submit'
						buttonText='Submit'
					/>
				</FormSubmit>
			) : (
				<Button
					className='form-submit__btn'
					onClick={onNext}
					disabled={isNextDisabled}
					type='submit'
					buttonText='Next'
				/>
			)}

			<Button
				className='form-submit__btn'
				type='button'
				onClick={onPrev}
				disabled={isPrevDisabled}
				buttonText='Previous'
			/>
		</>
	)
}
