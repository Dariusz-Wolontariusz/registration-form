// Mini component written by Sudaman

// {
// 	;[
// 		{
// 			match: 'valueMissing',
// 			message: 'Please enter a new password',
// 		},
// 		{
// 			match: (value: string) =>
// 				!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
// 					value
// 				),
// 			message:
// 				'Password must be at least 8 characters long, contain 1 uppercase, 1 digit and 1 special character',
// 		},
// 	].map(({ match, message }) => (
// 		<FormMessage key={message} className='form__message' match={match}>
// 			{message}
// 		</FormMessage>
// 	))
// }
