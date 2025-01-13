import { useState } from 'react'
import './InputComponent.css'
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
	FormValidityState,
} from '@radix-ui/react-form'
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import { validationRules } from '@/app/lib/validationRules'

interface InputComponentProps {
	id: string
	fieldName: string
	label?: string
	type:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
	value: string
	placeholder?: string
	required?: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	validation?: (keyof typeof validationRules)[]
	compareValue?: string
}

function InputComponent({
	id,
	fieldName,
	label,
	type,
	placeholder,
	value,
	required,
	onChange,
	validation,
	compareValue,
}: InputComponentProps) {
	const [showPassword, setshowPassword] = useState<boolean>(false)
	const [isValid, setIsValid] = useState<boolean>(false)

	const passwordField = type === 'password'

	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault()
		setshowPassword(!showPassword)
	}

	return (
		<FormField className='form-field' id={id} name={fieldName}>
			{label && <FormLabel className='form-label'>{label}</FormLabel>}
			<FormValidityState>
				{(validity) => (
					<div className={passwordField ? 'password-container' : ''}>
						<FormControl asChild>
							<input
								type={passwordField && showPassword ? 'text' : type}
								className='form-input'
								placeholder={placeholder}
								value={value}
								onChange={onChange}
								required={required}
							/>
						</FormControl>

						{passwordField && (
							<button className='form-password__btn' onClick={handleToggle}>
								{!showPassword ? (
									<EyeOpenIcon className='form-icon' />
								) : (
									<EyeClosedIcon className='form-icon' />
								)}
							</button>
						)}
					</div>
				)}
			</FormValidityState>

			{validation &&
				validation.map((validationProp) => {
					const rule = validationRules[validationProp]
					if (!rule) return null
					const { match, message } = rule

					// If match is a function, wrap it as a custom matcher
					if (typeof match === 'function') {
						return (
							<FormMessage
								className='form-message'
								key={validationProp}
								match={(valueToValidate) =>
									match(valueToValidate, compareValue || '')
								}
							>
								{message}
							</FormMessage>
						)
					}
					return (
						<FormMessage
							className='form-message'
							key={validationProp}
							match={match}
						>
							{message}
						</FormMessage>
					)
				})}
		</FormField>
	)
}

export default InputComponent
