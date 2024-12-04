import StepOne from './components/stepOne/StepOne'

export default function Home() {
	return (
		<main>
			<header>
				<h1>Welcome to The Registration Form</h1>
			</header>
			<section className='form__container'>
				<StepOne />
			</section>
		</main>
	)
}
