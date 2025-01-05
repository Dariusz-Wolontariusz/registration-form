type ValidationMatch =
	| 'valueMissing'
	| 'typeMismatch'
	| ((value: string) => boolean)
	| ((value: string, compareValue: string) => boolean)

type ValidationRule = {
	match: ValidationMatch
	message: string
}

type ValidationRules = {
	[key: string]: ValidationRule
}

export const validationRules: ValidationRules = {
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
