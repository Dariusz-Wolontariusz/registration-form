import React from 'react'
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from '@radix-ui/react-form'

type validationRule = {
	match: 'valueMissing' | 'typeMismatch' | ((value: string) => boolean)
	message: string
}

type validationRules = {
	[key: string]: validationRule
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
	validation: validationRules
	// errorMessage: string
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
}: // errorMessage,
InputSectionProps) {
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
			{validate}
			{/* <FormMessage className='form__message' match='valueMissing'>
				{errorMessage}
			</FormMessage> */}
		</FormField>
	)
}

export default InputSection
