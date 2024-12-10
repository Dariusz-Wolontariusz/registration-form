import { useState } from 'react'
import './InputComponent.css'
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from '@radix-ui/react-form'
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'

const validationArray: ValidationRules = {
	required: {
		match: 'valueMissing',
		message: '* This field is required',
	},
	minLength: {
		match: (value: string) => value.length < 3,
		message: '* Must be at least 3 characters long',
	},
	email: {
		match: 'typeMismatch',
		message: '* Please enter a valid email address',
	},
	password: {
		match: (value: string) =>
			!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
				value
			),
		message:
			'* Password must be at least 8 characters long, contain 1 uppercase, 1 digit and 1 special character',
	},
	confirmField: {
		match: (value: string, compareValue: string) => value !== compareValue,
		message: "* Entered email address doesn't match with the previous one",
	},
}

type ValidMatchType =
	| 'valueMissing'
	| 'typeMismatch'
	| ((value: string) => boolean)
	| ((value: string, compareValue: string) => boolean)

type ValidationRule = {
	match: ValidMatchType
	message: string
}

type ValidationRules = {
	[key: string]: ValidationRule
}

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
	validation?: (keyof typeof validationArray)[]
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
	const [showPassword, setshowPassword] = useState(true)

	const passwordField = type === 'password'

	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault()
		setshowPassword(!showPassword)
	}

	return (
		<FormField className='form__field' id={id} name={fieldName}>
			<FormLabel className='form__label'>{label}</FormLabel>
			<div className={passwordField ? 'password__container' : ''}>
				<FormControl asChild>
					<input
						type={passwordField && showPassword ? 'text' : 'password'}
						className='form__input'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						required={required}
					/>
				</FormControl>
				{passwordField && (
					<button className='form__password--btn' onClick={handleToggle}>
						{!showPassword ? (
							<EyeOpenIcon className='form__icon' />
						) : (
							<EyeClosedIcon className='form__icon' />
						)}
					</button>
				)}
			</div>
			{validation &&
				validation.map((validationProp) => {
					const rule = validationArray[validationProp]
					if (!rule) return null
					const { match, message } = rule

					// If match is a function, wrap it as a custom matcher
					if (typeof match === 'function') {
						return (
							<FormMessage
								className='form__message'
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
							className='form__message'
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
