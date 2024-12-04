import { StepOne } from './components/StepOne'
import StepTwo from './components/stepTwo/StepTwo'

export default function Home() {
	return (
		<main>
			<header>
				<h1>Welcome to The Registration Form</h1>
			</header>
			<section className='form__container'>
				<StepTwo />
			</section>
		</main>
	)
}
