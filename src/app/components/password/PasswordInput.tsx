import React from 'react'
import './PasswordInput.css'
import { useState } from 'react'
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from '@radix-ui/react-form'

const passValidationArray: ValidationRules = {}

interface PasswordInputProps {
	id: string
	fieldName: string
	type: 'password' | 'text'
	placeholder: string
	label: string
	value: string
	required: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	validation: (keyof typeof passValidationArray)[]
	compareValue?: string
}

type ValidationType =
	| 'valueMissing'
	| 'typeMismatch'
	| ((value: string) => boolean)
	| ((value: string, compareValue: string) => boolean)

type ValidationRule = {
	match: ValidationType
	message: string
}

type ValidationRules = {
	[key: string]: ValidationRule
}

function PasswordInput({
	id,
	fieldName,
	type,
	placeholder,
	label,
	value,
	required,
	onChange,
	validation,
	compareValue,
}: PasswordInputProps) {
	const [isVisible, setIsVisible] = useState(false)

	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault()
		setIsVisible(!isVisible)
	}

	return (
		<FormField className='form__field' id={id} name={fieldName}>
			<FormLabel className='form__label'>{label}</FormLabel>
			<FormControl asChild>
				<div className='password__container'>
					<input
						className='form__input'
						type={isVisible ? 'text' : 'password'}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						required={required}
					/>
					<button className='form__password--btn' onClick={handleToggle}>
						{!isVisible ? (
							<EyeOpenIcon className='form__icon' />
						) : (
							<EyeClosedIcon className='form__icon' />
						)}
					</button>
				</div>
			</FormControl>
			{validation &&
				validation.map((key) => {
					const rule = passValidationArray[key]
					if (!rule) return null

					const { match, message } = rule

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
					} else {
						return (
							<FormMessage className='form__message' key={key} match={match}>
								{message}
							</FormMessage>
						)
					}
				})}
		</FormField>
	)
}

export default PasswordInput
