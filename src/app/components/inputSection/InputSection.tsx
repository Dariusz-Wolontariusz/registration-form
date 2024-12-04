import React from 'react'
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from '@radix-ui/react-form'

const validationArray: ValidationRules = {
	required: {
		match: 'valueMissing',
		message: 'This field is required',
	},
	minLength: {
		match: (value: string) => value.length < 3,
		message: 'Must be at least 3 characters long',
	},
	email: {
		match: 'typeMismatch',
		message: 'Please enter a valid email address',
	},
	password: {
		match: (value: string) =>
			!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
				value
			),
		message:
			'Password must be at least 8 characters long, contain 1 uppercase, 1 digit and 1 special character',
	},
	confirmField: {
		match: (value: string, compareValue: string) => value !== compareValue,
		message: "* Entered email address doesn't match with the previous one",
	},
}

// type ValidMatchType = {
// 	match: 'valueMissing' | 'typeMismatch' | ((value: string) => boolean)
// 	message: string
// }

type ValidMatchType =
	| 'valueMissing'
	| 'typeMismatch'
	| ((value: string) => boolean)
	| ((value: string, email: string) => boolean)

type ValidationRule = {
	match: ValidMatchType
	message: string
}

type ValidationRules = {
	[key: string]: ValidationRule
}

interface InputSectionProps {
	id: string
	fieldName: string
	label: string
	type: string
	value: string
	placeholder: string
	required: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	validation: (keyof typeof validationArray)[]
	compareValue?: string
}

function InputSection({
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
}: InputSectionProps) {
	return (
		<FormField className='form__field' id={id} name={fieldName}>
			<FormLabel className='form__label'>{label}</FormLabel>
			<FormControl asChild>
				<input
					type={type}
					className='form__input'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					required={required}
				/>
			</FormControl>
			{validation &&
				validation.map((key) => {
					const rule = validationArray[key]
					if (!rule) return null
					const { match, message } = rule

					// If match is a function, wrap it as a custom matcher
					if (typeof match === 'function') {
						return (
							<FormMessage
								className='form__message'
								key={key}
								match={(valueToValidate) =>
									match(valueToValidate, compareValue || '')
								}
							>
								{message}
							</FormMessage>
						)
					}
					return (
						<FormMessage className='form__message' key={key} match={match}>
							{message}
						</FormMessage>
					)
				})}
		</FormField>
	)
}

export default InputSection
