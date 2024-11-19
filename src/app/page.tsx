// import Link from 'next/link'
import { StepOne } from './components/StepOne'
import StepTwo from './components/stepTwo/StepTwo'

export default function Home() {
	return (
		<main>
			<h1>Welcome to Pet Escort</h1>
			<div className='formContainer'>
				<StepTwo />
			</div>
		</main>
	)
}
