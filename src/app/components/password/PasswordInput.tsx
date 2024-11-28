import { useState } from 'react'
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'

interface PasswordInputProps {
	id: string
	placeholder?: string
	value: string
	required: boolean
	className: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

//id is obligatory, placeholder is optional with default 'Enter...' : they expect PasswordInputProps
export default function PasswordInput({
	id,
	placeholder = 'Enter the password',
	value,
	required,
	className,
	onChange,
}: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className='password__container'>
			<input
				id={id}
				type={showPassword ? 'text' : 'password'}
				className={className}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
			<button
				className='password__btn'
				onClick={() => setShowPassword(!showPassword)}
			>
				{showPassword ? (
					<EyeOpenIcon className='password__icon' />
				) : (
					<EyeClosedIcon className='password__icon' />
				)}
			</button>
		</div>
	)
}
