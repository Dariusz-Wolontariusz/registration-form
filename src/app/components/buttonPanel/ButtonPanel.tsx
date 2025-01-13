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
						className='form__submit-btn'
						type='submit'
						buttonText='Submit'
					/>
				</FormSubmit>
			) : (
				<Button
					className='form__submit-btn'
					onClick={onNext}
					disabled={isNextDisabled}
					type='submit'
					buttonText='Next'
				/>
			)}

			<Button
				className='form__submit-btn'
				type='button'
				onClick={onPrev}
				disabled={isPrevDisabled}
				buttonText='Previous'
			/>
		</>
	)
}

//This is my try to use a ValidityState, unfortunately there's a bug in Radix which does't allow to use it outside of specific FormField

// import React from 'react'
// import Button from '../button/Button'
// import { FormField, FormValidityState } from '@radix-ui/react-form'

// interface ButtonPanelProps {
// 	onNext: () => void
// 	onPrev: () => void
// 	isPrevDisabled: boolean
// }

// export default function ButtonPanel({
// 	onNext,
// 	onPrev,
// 	isPrevDisabled,
// }: ButtonPanelProps) {
// 	return (
// 		<FormField name='try'>
// 			<FormValidityState>
// 				{(validity) => (
// 					<>
// 						<Button
// 							className='form__submit-btn'
// 							onClick={onNext}
// 							disabled={!validity?.valid}
// 							type='button'
// 							buttonText='Next'
// 						/>
// 						<Button
// 							className='form__submit-btn'
// 							type='button'
// 							onClick={onPrev}
// 							disabled={isPrevDisabled}
// 							buttonText='Previous'
// 						/>
// 					</>
// 				)}
// 			</FormValidityState>
// 		</FormField>
// 	)
// }
