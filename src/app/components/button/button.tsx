import React from 'react'

interface ButtonComponentProps {
	id?: string
	className: string
	style?: React.CSSProperties
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formmethod?: string
	formnovalidate?: boolean
	formtarget?: '_blank' | '_self' | '_parent' | '_top' | string
	popovertarget?: string
	popovertargetaction?: 'show' | 'hide' | 'toggle'
	name?: string
	type: 'button' | 'submit' | 'reset'
	value?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	onFocus?: React.FocusEventHandler<HTMLButtonElement>
	onBlur?: React.FocusEventHandler<HTMLButtonElement>
	onSubmit?: React.FocusEventHandler<HTMLButtonElement>
	buttonText: React.ReactNode
	'aria-label'?: string
	'aria-expanded'?: boolean
	'aria-pressed'?: boolean
	'aria-controls'?: string
}

export default function Button({
	id,
	className,
	style,
	autofocus,
	disabled,
	form,
	formaction,
	formmethod,
	formnovalidate,
	formtarget,
	popovertarget,
	popovertargetaction,
	name,
	type,
	value,
	onClick,
	onFocus,
	onBlur,
	onSubmit,
	buttonText,
	'aria-label': ariaLabel,
	'aria-expanded': ariaExpanded,
	'aria-pressed': ariaPressed,
	'aria-controls': ariaControls,
}: ButtonComponentProps) {
	return (
		<button
			id={id}
			className={className}
			style={style}
			autoFocus={autofocus}
			disabled={disabled}
			form={form}
			formAction={formaction}
			formMethod={formmethod}
			formNoValidate={formnovalidate}
			formTarget={formtarget}
			data-popovertarget={popovertarget}
			data-popovertargetaction={popovertargetaction}
			name={name}
			type={type}
			value={value}
			onClick={onClick}
			onFocus={onFocus}
			onBlur={onBlur}
			onSubmit={onSubmit}
			aria-label={ariaLabel}
			aria-expanded={ariaExpanded}
			aria-pressed={ariaPressed}
			aria-controls={ariaControls}
		>
			{buttonText}
		</button>
	)
}
